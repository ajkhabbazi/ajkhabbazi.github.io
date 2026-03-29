// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-milestone-i-graduated-with-a-bs-in-mechanical-engineering-with-highest-distinction-from-the-university-of-tabriz-ranking-first-in-a-class-of-155-students",
          title: '[milestone] I graduated with a BS in Mechanical Engineering with Highest Distinction from...',
          description: "",
          section: "News",},{id: "news-milestone-i-started-my-ms-in-mechanical-engineering-at-the-university-of-british-columbia",
          title: '[milestone] I started my MS in Mechanical Engineering at the University of British...',
          description: "",
          section: "News",},{id: "news-talk-i-presented-our-abstract-the-blending-and-transmission-of-hydrogen-and-natural-gas-in-transmission-and-distribution-pipelines-at-the-13th-international-green-energy-conference-igec-xiii",
          title: '[talk] I presented our abstract “The Blending and Transmission of Hydrogen and Natural...',
          description: "",
          section: "News",},{id: "news-talk-i-presented-our-abstract-green-hydrogen-supply-to-urban-infrastructure-and-buildings-through-blending-into-the-existing-grid-at-the-2022-csme-international-congress-at-the-university-of-alberta",
          title: '[talk] I presented our abstract “Green Hydrogen Supply to Urban Infrastructure and Buildings...',
          description: "",
          section: "News",},{id: "news-award-i-received-the-best-presentation-award-at-the-advanced-energy-symposium-during-the-2022-csme-international-congress-at-the-university-of-alberta-for-our-abstract-green-hydrogen-supply-to-urban-infrastructure-and-buildings-through-blending-into-the-existing-grid",
          title: '[award] I received the Best Presentation Award at the Advanced Energy Symposium during...',
          description: "",
          section: "News",},{id: "news-talk-i-presented-our-paper-blending-of-hydrogen-into-a-natural-gas-distribution-pipeline-in-british-columbia-through-a-tee-junction-for-reducing-ghg-emissions-at-the-2023-csme-international-congress-at-the-université-de-sherbrooke",
          title: '[talk] I presented our paper “Blending of hydrogen into a natural gas distribution...',
          description: "",
          section: "News",},{id: "news-award-i-received-the-best-paper-award-at-the-2023-csme-international-congress-at-the-université-de-sherbrooke-for-our-paper-blending-of-hydrogen-into-a-natural-gas-distribution-pipeline-in-british-columbia-through-a-tee-junction-for-reducing-ghg-emissions",
          title: '[award] I received the Best Paper Award at the 2023 CSME International Congress...',
          description: "",
          section: "News",},{id: "news-milestone-i-started-my-phd-in-mechanical-engineering-at-purdue-university",
          title: '[milestone] I started my PhD in Mechanical Engineering at Purdue University!',
          description: "",
          section: "News",},{id: "news-milestone-i-defended-my-ms-thesis-mixing-gaseous-hydrogen-into-natural-gas-distribution-pipelines-at-the-university-of-british-columbia",
          title: '[milestone] I defended my MS thesis “Mixing gaseous hydrogen into natural gas distribution...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-mixing-hydrogen-into-natural-gas-distribution-pipeline-system-through-tee-junctions-was-published-in-international-journal-of-hydrogen-energy-this-was-my-first-ever-journal-paper-and-a-major-part-of-my-ms-thesis",
          title: '[paper] Our paper “Mixing hydrogen into natural gas distribution pipeline system through Tee...',
          description: "",
          section: "News",},{id: "news-talk-i-gave-a-talk-on-field-demonstrations-of-advanced-commercial-hvac-control-at-the-2024-intelligent-building-operations-ibo-workshop-at-purdue",
          title: '[talk] I gave a talk on Field Demonstrations of Advanced Commercial HVAC Control...',
          description: "",
          section: "News",},{id: "news-talk-i-presented-what-have-we-learned-from-field-demonstrations-of-advanced-commercial-hvac-control-at-the-8th-international-conference-on-high-performance-buildings-as-part-of-the-2024-herrick-conferences-at-purdue",
          title: '[talk] I presented “What Have We Learned From Field Demonstrations of Advanced Commercial...',
          description: "",
          section: "News",},{id: "news-milestone-i-passed-my-phd-area-exam-in-mechanical-engineering-at-purdue",
          title: '[milestone] I passed my PhD Area Exam in Mechanical Engineering at Purdue!',
          description: "",
          section: "News",},{id: "news-award-i-received-the-ashrae-graduate-student-grant-in-aid-award",
          title: '[award] I received the ASHRAE Graduate Student Grant-in-Aid Award!',
          description: "",
          section: "News",},{id: "news-milestone-i-joined-tesla-as-an-engineering-intern-applied-ml-on-the-drive-unit-team",
          title: '[milestone] I joined Tesla as an Engineering Intern, Applied ML on the Drive...',
          description: "",
          section: "News",},{id: "news-paper-our-review-paper-lessons-learned-from-field-demonstrations-of-model-predictive-control-and-reinforcement-learning-for-residential-and-commercial-hvac-a-review-was-published-in-applied-energy-this-was-my-first-phd-journal-paper",
          title: '[paper] Our review paper “Lessons learned from field demonstrations of model predictive control...',
          description: "",
          section: "News",},{id: "news-award-i-received-the-best-phd-forum-presentation-runner-up-award-at-acm-buildsys-2025-in-golden-co",
          title: '[award] I received the Best PhD Forum Presentation Runner-up Award at ACM BuildSys...',
          description: "",
          section: "News",},{id: "news-paper-our-paper-small-hvac-control-demonstrations-in-larger-buildings-often-overestimate-savings-was-accepted-to-the-2026-american-control-conference-acc",
          title: '[paper] Our paper “Small HVAC Control Demonstrations in Larger Buildings Often Overestimate Savings”...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
