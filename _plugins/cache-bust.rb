# based on https://distresssignal.org/busting-css-cache-with-jekyll-md5-hash
# https://gist.github.com/BryanSchuetz/2ee8c115096d7dd98f294362f6a667db
module Jekyll
  module CacheBust
    class CacheDigester
      require 'digest/md5'
      require 'pathname'

      attr_accessor :file_name, :sources

      # `sources` is a list of glob patterns whose combined contents determine
      # the digest. Leave it nil to digest `file_name` itself.
      def initialize(file_name:, sources: nil)
        self.file_name = file_name
        self.sources = sources
      end

      def digest!
        [file_name, '?', Digest::MD5.hexdigest(file_contents)].join
      end

      private

      # Sorted so the digest does not depend on the order the filesystem
      # happens to return matches in.
      def sources_content
        Dir[*sources].sort.reject { |f| File.directory?(f) }.map { |f| File.read(f) }.join
      end

      def file_content
        local_file_name = file_name.slice((file_name.index('assets/')..-1))
        File.read(local_file_name)
      end

      def file_contents
        sources.nil? ? file_content : sources_content
      end
    end

    def bust_file_cache(file_name)
      CacheDigester.new(file_name: file_name, sources: nil).digest!
    end

    # main.css is generated from main.scss at build time, so there is no source
    # file to digest directly. Digest what it is compiled from instead: the
    # entry stylesheet plus every partial it imports.
    def bust_css_cache(file_name)
      CacheDigester.new(file_name: file_name, sources: ['assets/css/main.scss', '_sass/**/*']).digest!
    end
  end
end

Liquid::Template.register_filter(Jekyll::CacheBust)