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
    "I’m a passionate and performance-driven Full Stack Software Developer 🚀 with a strong foundation in building scalable, responsive, and user-focused Web and Mobile applications.\nI specialize in technologies like JavaScript 📜, React.js ⚛️, Node.js 🟢, and React Native 📱, and have solid experience with Java ☕ and Python 🐍.\nMy core technical strengths include Data Structures & Algorithms ⚙️, Operating Systems 💻, DBMS 🗄️, and Software Engineering Principles.\nI’m proficient in working with both SQL and MySQL 🧮 for managing structured data, and use MongoDB 🍃 for NoSQL solutions.\nI confidently use tools like Git/GitHub 🐙, VS Code 🧩, and Postman 📫 throughout the development lifecycle.\nWhether it’s designing intuitive frontends, developing robust backends, or optimizing database queries, I strive to deliver clean, efficient, and impactful solutions.\nLet’s build innovative tech that performs beautifully and scales effortlessly!"
  ),
  resumeLink:
    " my resume link ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Saurabh22Kumar/",
  linkedin: "https://www.linkedin.com/in/saurabh-kumar-04b313299",
  gmail: "myidis2203@gmail.com",
  // gitlab: " future-git-lab-link  ",
  // facebook: " future-facebook-lnk  ",
  // stackoverflow: " future-stackoverflow-link   ",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    // emoji("⚡ contents to add in future "),
    // emoji(
    //   "⚡ contents to add in future "
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
    },
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
      schoolName: "Army Public School",
      logo: require("./assets/images/apsLogo.jpeg"),
      subHeader: "June 2018",
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
      desc: "I completed a Web Development Internship at Digital Bheem from 1st June 2024 to 15th July 2024, where I developed responsive web pages, optimized user interfaces using HTML, CSS, and JavaScript, and collaborated on improving website performance and design.",
    },
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/digitalbhemLogo.png"),
      projectName: "Lorem ipsum",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "projectLink"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/digitalbhemLogo.png"),
      projectName: "Lorem ipsum",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "projectlink"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications that I have done !",

  achievementsCards: [
    {
      title: "Cyber Security and Applied Ethical Hacking",
      subtitle:
        "Learned practical cyber security skills and ethical hacking techniques for digital protection.",
      image: require("./assets/images/appliedcybersecurity.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
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
          name: "Certification",
          //url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
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
