// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import django from './assets/tech_logo/django.png';
import powerbi from './assets/tech_logo/powerbi.png';
import tableau from './assets/tech_logo/tableau.png';
import excel from './assets/tech_logo/excel.png';

// Education Section Logo's
import pragati from './assets/education_logo/pragati.png';
import giet from './assets/education_logo/giet.png';
import jnmSchool from './assets/education_logo/jnmSchool.png';

// Project Section Logo's
import weatherApp from './assets/work_logo/weatherApp.png';
import musicRec from './assets/work_logo/musicRecommendation.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Django', logo: django}
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Power Bi', logo: powerbi},
      { name: 'Tableau', logo: tableau},
      { name: 'Excel', logo: excel}
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: pragati,
      school: "Pragati Engineering College, Surampalem",
      date: "Aug 2023 - July 2026",
      grade: "7.81 CGPA",
      desc: "I am currently pursuing my B.Tech in Information Technology from Pragati Engineering College. Throughout my academic journey, I have been building a strong foundation in programming, software development, and computer science principles. I am studying courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I also take part in workshops and technical events to enhance my practical knowledge and skills. My learning experience at Pragati Engineering College is helping me develop the technical expertise and problem-solving abilities needed to grow as an IT professional.",
      degree: "B.Tech - IT",
    },
    {
      id: 1,
      img: giet,
      school: "GIET Polytechnic College, Rajamundry",
      date: "Sept 2020 - June 2023",
      grade: "78%",
      desc: "I have completed my Diploma in Computer Engineering from GIET Polytechnic College, where I gained fundamental knowledge in programming, computer networks, database management, and software development. This course helped me build a strong technical base and prepared me for advanced studies in Information Technology.",
      degree: "Diploma - CME (Computer Engineering)",
    },
    {
      id: 2,
      img: jnmSchool,
      school: "JNM High School, Peddapuram",
      date: "Apr 2019 - March 2020",
      grade: "98%",
      desc: "I have successfully completed my 10th standard from JNM High School, which provided me with a strong foundation in core subjects and helped me develop discipline, problem-solving skills, and a keen interest in technology.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Wheather Report Webapp",
      description:
        "A simple and interactive web application that provides real-time weather updates for any location. It fetches live data using weather APIs and displays key details like temperature, humidity, wind speed, and conditions with a clean, user-friendly interface.",
      image: weatherApp,
      tags: ["HTML", "CSS", "JavaScript", "Api"],
      github: "https://github.com/sanjaykumar1206/wheather-app",
      webapp: "https://sanjaykumar1206.github.io/wheather-app/",
    },
    {
      id: 1,
      title: "Music Recommendation System",
      description:
        "An intelligent music recommendation system that analyzes a user’s emotions and facial expressions to suggest songs matching their mood. Using computer vision and machine learning, the application detects real-time facial cues and maps them to emotional states, providing a personalized playlist that enhances the listening experience.",
      image: musicRec,
      tags: ["Python", "TensorFlow", "MySql", "HTML", "CSS"],
      github: "https://github.com/sanjaykumar1206/music_recommendation",
      webapp: "",
    },
  ];  