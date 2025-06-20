/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saurabh Kumar",
  title: "Hi all, I'm Saurabh",
  subTitle: emoji(
    "I’m a passionate and detail-oriented Full Stack Software Developer 🚀, driven by curiosity and a constant desire to build clean, efficient, and scalable tech solutions. With a strong command over both frontend and backend development, I love crafting digital experiences that are fast, responsive, and user-focused.\n I specialize in JavaScript 📜, React.js ⚛️, Node.js 🟢, and MongoDB 🍃, and I’m also well-versed in Java ☕ and Python 🐍 for versatile problem-solving. I enjoy building modern web apps with Next.js and React, as well as exploring the power of API development, database design, and real-time features.\n My solid foundation in Data Structures & Algorithms ⚙️, Operating Systems 💻, DBMS 🗄️, and Software Engineering Principles helps me write optimized and maintainable code. I work comfortably with both SQL/MySQL 🧮 and NoSQL databases.\n From using Git/GitHub 🐙, VS Code 🧩, and Postman 📫, to deploying apps via Docker 🐳 and Vercel/Netlify ☁️, I confidently handle all phases of the development lifecycle. Whether it’s building dynamic UIs, integrating secure APIs, or implementing end-to-end solutions, I’m always eager to take on challenges and grow through them.\n Let’s create products that solve real problems and scale beautifully 🌍✨!"
  ),
  resumeLink: " my resume link ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Saurabh22Kumar/",
  linkedin: "https://www.linkedin.com/in/saurabh-kumar-04b313299",
  gmail: "myidis2203@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    )
  ],
  softwareSkills: [
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "devicon-nextjs-original-wordmark"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf" // or use devicon-mongodb-plain if supported
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server" // or devicon-express-original
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "devicon-tailwindcss-plain"
    },
    {
      skillName: "Supabase",
      fontAwesomeClassname: "devicon-supabase-plain" // (use a custom icon if FontAwesome doesn't support it)
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Nitte Meenskashi Institue of Technology",
      logo: require("./assets/images/nmitLogo.jpeg"),
      subHeader: "Master of Computer Applications",
      duration: "November 2023 - July 2025"
    },
    {
      schoolName: "Kalinga University",
      logo: require("./assets/images/kalingaLogo.png"),
      subHeader: "Bachelor of Computer Applications",
      duration: "July 2019 - June 2022"
    },
    {
      schoolName: "Army Public School, Danapur Cantt",
      logo: require("./assets/images/apsLogo.jpeg"),
      subHeader: "2017 - 2018"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Digital Bhem",
      companylogo: require("./assets/images/digitalbhemLogo.png"),
      date: "June 01,2024 – July 15,2024",
      desc: "I completed a Web Development Internship at Digital Bheem from 1st June 2024 to 15th July 2024, where I developed responsive web pages, optimized user interfaces using HTML, CSS, and JavaScript, and collaborated on improving website performance and design."
    }
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some real-world platforms and applications I’ve built",
  projects: [
    {
      image: require("./assets/images/portfolioLogo.png"), // Replace with actual image
      projectName: "Portfolio Website",
      projectDesc:
        "A customizable and responsive personal portfolio template built with React.js, integrating GitHub to showcase live projects dynamically.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Saurabh22Kumar/saurabhportfolio" // replace with your GitHub/Live URL
        }
      ]
    },
    {
      image: require("./assets/images/besideLogo.png"), // Replace with actual image
      projectName: "Beside – Rental Platform",
      projectDesc:
        "A modern rental platform with role-based access, real-time booking, Supabase Auth, and Cloudinary integration. Built with Next.js + Supabase.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Saurabh22Kumar/beside-rental-platform" // replace with your GitHub/Live URL
        },
        {
          name: "View Live",
          url: "https://beside-rental-platform.vercel.app/" // replace with your GitHub/Live URL
        }
      ]
    },
    {
      image: require("./assets/images/chatflowLogo.png"), // Replace with actual image
      projectName: "ChatFlow – Realtime Chat App",
      projectDesc:
        "A secure, full-stack MERN chat app with live messaging, emoji reactions, dark mode, message encryption, and self-destructing chats.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Saurabh22Kumar/chatflow" // replace with your GitHub/Live URL
        },
        {
          name: "View Live",
          url: "https://chatflow-production-2fcc.up.railway.app/" // replace with your GitHub/Live URL
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications that I have done !",
  achievementsCards: [
    {
      title: "Cyber Security and Applied Ethical Hacking",
      subtitle:
        "Learned practical cyber security skills and ethical hacking techniques for digital protection.",
      image: require("./assets/images/appliedcybersecurity.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Fundamentals of Information Security",
      subtitle:
        "Gained foundational knowledge of data protection, risk management, and security principles",
      image: require("./assets/images/informationsecurity.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "JavaScript : Getting Started with JavaScript Programming",
      subtitle:
        "Learned JavaScript basics including variables, functions, loops, and DOM manipulation.",
      image: require("./assets/images/javascript.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Introduction to Back-End Development",
      subtitle:
        "Learned server-side development basics including databases, APIs, and backend frameworks essentials.",
      image: require("./assets/images/metabackend.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Introduction to Front-End Development",
      subtitle:
        "Learned HTML, CSS, and JavaScript basics for building interactive user interfaces.",
      image: require("./assets/images/metafrontend.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "NodeJS",
      subtitle:
        "Learned Node.js fundamentals, Express.js, asynchronous programming, backend development using practical Hindi tutorials.",
      image: require("./assets/images/nodejs.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Prompt Engineering for ChatGPT",
      subtitle:
        "Learned effective prompt crafting strategies to optimize ChatGPT responses efficiently.",
      image: require("./assets/images/prompteng.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "TCS iON Career Edge – Young Professional",
      subtitle:
        "Developed soft skills, communication, IT knowledge, and career-readiness for professionals.",
      image: require("./assets/images/tcs.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      subtitle:
        "Mastered full-stack development using HTML, CSS, JavaScript, Node.js, MongoDB, React, Express",
      image: require("./assets/images/webdev.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    },
    {
      title: "Android Application Development",
      subtitle:
        "Learned Android app creation using Java, UI design, activities, and deployment basics.",
      image: require("./assets/images/android.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9065750831",
  email_address: "myidis2203@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
