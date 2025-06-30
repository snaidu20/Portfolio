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
  username: "SaiKumar Reddy Naidu",
  title: "Hi all, I'm SaiKumar",
  subTitle: emoji(
    "Hey Folks, I'm Sai. I've spent the last 4+ years working as a Business application Analyst, helping teams solve problems, support systems, and make their work easier through better technology. What got me into this field wasn't just the tech — it was the challenge of figuring out how everything connects and how to improve it as things change rapidly. Early on, I realized that no degree teaches you how to understand people or untangle real-world issues — that came from hands-on work, asking good questions, and staying calm when things go wrong. I’ve supported enterprise applications, automated messy workflows, and worked with tools like SQL, Power BI, SharePoint, and Power Automate to help teams move faster and smarter. I care about building systems that actually work for the people using them, and for me, it's all about keeping things running smoothly, solving what others overlook, and doing it with purpose."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1n8Ezo1HTWVGE95z8FZfIARcXpTOxXkBh/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/snaidu20",
  linkedin: "https://www.linkedin.com/in/nsaikumar/",
  gmail: "saireddyn56@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Business Analyst & PMP who turns data and processes into real-world impact.",
  skills: [
    emoji(
      "⚡ Driving business success through smart analysis, clear communication, and agile execution."
    ),
    emoji("⚡ People Skills Matter..")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Florida Atlantic University",
      logo: require("./assets/images/fauLogo.png"),
      subHeader: "Master's in Computer Science",
      duration: "August 2022 - May 2024",
      desc: "Major in Computer science and skilled in data implementation and analysis.",
      descBullets: [
        "Coursework in business analysis"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      role: "Support Data Analyst",
      company: "M&T Bank",
      companylogo: require("./assets/images/MTLogo.png"),
      date: "June 2024 - present",
      desc: "Roles & responsibilities",
      descBullets: [
        "Resolved over 200 critical incidents, maintaining 99.9% uptime for enterprise risk and credit systems.",
        "Automated key workflows using Power Automate and SharePoint, saving teams 15+ hours per week.",
        "Led application upgrades and patching, reducing system downtime by 25%.",
        "Collaborated with vendors and stakeholders to implement enhancements that improved application performance."
      ]
    },
    {
      role: "IT Analyst",
      company: "Wipro Limited",
      companylogo: require("./assets/images/wiproLogo.png"),
      date: "July 2021 - July 2022",
      desc: "Roles & Responsibilities",
      descBullets: [
        "Supported claims processing apps, resolving 150+ tickets to ensure smooth client operations.",
        "Developed Power BI dashboards that improved operational visibility and sped up issue resolution.",
        "Created SOPs and training materials that reduced onboarding time by 40%.",
        "Coordinated with QA and development to deploy features faster, enhancing client satisfaction."
      ]
    },
    {
      role: "Support Analyst",
      company: "Experion Technologies",
      companylogo: require("./assets/images/experionLogo.png"),
      date: "August 2019 - June 2021",
      desc: "Roles & Responsibilies",
      descBullets: [
        "Supported financial analytics app rollout, contributing to reduced system downtime during launch.",
        "Developed SQL scripts that improved data validation accuracy and reporting reliability.",
        "Led user training and documentation efforts, decreasing support requests and boosting confidence.",
        "Collaborated on API integrations to streamline loan approval workflows and improve efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Project Management Professional",
      subtitle:
        "Project Management Institute.",
      image: require("./assets/images/pmpLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/da4617d8-e93d-42f5-b2d9-b76316ac5606/public_url"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Business Analysis by Microsoft",
      subtitle:
        "Data analysis",
      image: require("./assets/images/BALogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/ef436490fcdf6938f83a22fb89f1d1c436d7f0de577fdc3428871d8140d5127f"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (912)-306-7209",
  email_address: "saireddyn56@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
