// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Ziad",
  logo_name: "Ziad.p()",
  nickname: "Ziad / zoz",
  full_name: "Ziad Elhussiny",
  subTitle:
    "Frontend Developer, React.js . Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1dDpZmLX8p0TMFfmYk43364tdTbVZGHc2/view?usp=sharing",
  mail: "mailto:ziadelhussiny05@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ziadelhussiny",
  linkedin: "https://www.linkedin.com/in/ziad-elhussiny-1a006b244?",
  gmail: "ziadelhussiny05@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive UIs with React, using React Hooks, Context API, useReducer, and React Router for state management and navigation",
        "⚡ Fetching and displaying data from external APIs (REST/GraphQL) with Axios or fetch(), handling async/await, and error management",
        "⚡Tailwind CSS Rapid development of responsive, mobile-first designs with utility-first classes, and custom configurations. ",
        "⚡Working with Webpack, Babel, and deploying to Netlify,Github, Vercel, or Heroku",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "Front-End Development",
      fileName: "CloudInfraImg",
      skills: [
       "⚡ Experience building responsive websites using **ReactJS** and **Tailwind CSS**",
    "⚡ Proficient in **React Router** for dynamic routing and navigation",
    "⚡ Certified in **ReactJS** and **Front-End Development** (e.g., **React Router** **Iti ** certification)",
    "⚡ Experience integrating APIs (REST/GraphQL) to fetch and display dynamic content",
    "⚡ Knowledge of modern JavaScript (ES6+) and state management using **React hooks** (useState, useEffect)"
  ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "TailwindCss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#47A248",
          },
        },
       
      ],
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "suez canal university",
      subtitle: "Commerce and Management",
      logo_path: "suze.jpg",
      alt_name: "SCU",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Worked extensively with front-end technologies like HTML, CSS, and JavaScript to build dynamic web pages.",
    "⚡ Developed responsive web designs using **ReactJS** and **Tailwind CSS** for an optimized user experience.",
    "⚡ Collaborated in team projects, creating interactive user interfaces and ensuring seamless functionality with API integration."
  ],
    
    },
   
  ],
};

const certifications = {
  certifications: [
    {
      title: "ALX Developer Frontend",
      subtitle: "Alx Web Frontend",
      logo_path: "Untitled.jpg",
     
      alt_name: "ALX",
      color_code: "#4C4C9F",
    },
    {
      title: "Front-End Development React,js",
      subtitle: "Route academy",
      logo_path: "Route.png",
      certificate_link:
        "https://drive.google.com/file/d/1jD1_8vKXxInDNikdZLTt3FJ4215bI8VQ/view?usp=sharing",
      alt_name: "Route",
      color_code: "#1E88E5",
    },
    {
      title: "ITi Summer of Code 2019",
      subtitle: "iti / node.js",
      logo_path: "iti.jpg",
      certificate_link: " ",
      alt_name: "iti",
      color_code: "#D32F2F",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed two internships. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "plusdigital Frontend Developer",
          company: "plusdigital Agency",
          company_url: "https://drive.google.com/file/d/1jD1_8vKXxInDNikdZLTt3FJ4215bI8VQ/view?usp=sharing",
          logo_path: "primarylogo.png",
          duration: "feb 2024 - Present",
          location: "ismailia",
          description:
            "•  Developed responsive and dynamic web applications, utilizing React.js component-based architecture to build scalable and maintainable UIs\n" +
            "• Integrated and customized customer relationship management (CRM) systems to optimize business processes, improve user experience, and enhance data management\n" +
            "• Laravel (PHP): Built robust back-end solutions using Laravel, creating secure APIs, handling database migrations, and implementing efficient data processing for seamless front-end and back-end integration.\n" ,
          color: "#f10000",
        },
       
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Link Development Summer of Code",
          company: "Link Development",
          company_url: "",
          logo_path: "linkdevolpment.jpg",
          duration: "",
          location: "Egypt",
          description:"Worked as a Frontend Developer, specializing in React.js. Developed and contributed to various projects, including building dynamic and responsive user interfaces, integrating APIs, and improving overall application performance. Collaborated with cross-functional teams to deliver high-quality solutions and enhance user experience",
            
        },
 
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
      
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "zezo1.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
 
};

const projects = {
  data: [
    {
      name: "Creating a movie app",
      url: "https://ziadelhussiny.github.io/move-app-2/",
      description:
        "A marketplace for APIs. , Java Script, HTML & CSS, API, OOP concept, Tailwind",
      languages: [
        {
          name: "Html",
          iconifyClass: "simple-icons:html5",
        },
        {
          name: "javaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "css",
          iconifyClass: "fa-css3",
          
        },
        {
          name: "talwind",
          iconifyClass: "simple-icons:tailwindcss",
        },
        
      ],
    },
    {
      name: " Management app",
      url: "https://taskmangeros.netlify.app/",
      description: "ava Script, HTML, Bootstrap, CSS, React.js, Redux",
      languages: [
        {
          name: "css",
          iconifyClass: "fa-css3",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "Html",
          iconifyClass: "simple-icons:html5",
        },
       
      ],
    },
    {
      name: "Weather-App",
      url: "https://ziadelhussiny.github.io/weather-app2/",
      description:
        "Java Script, HTML & CSS-.",
      languages: [
        {
          name: "css",
          iconifyClass: "fa-css3",
        },
        {
          name: "javaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Html",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
    {
      name: "Customer transactions",
      url: "https://ziadelhussiny.github.io/Route-Task-Event/",
      description: "Java Script, HTML & CSS, React.js",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "css",
          iconifyClass: "fa-css3",
        },
        {
          name: "javaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Html",
          iconifyClass: "simple-icons:html5",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
