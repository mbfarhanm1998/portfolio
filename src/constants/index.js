import project1 from "../assets/projects/project-5.webp";
import project2 from "../assets/projects/project-6.webp";
import project3 from "../assets/projects/project-7.webp";
import project4 from "../assets/projects/project-8.webp";

export const HERO_CONTENT = `Muhammad Farhan Shaukat is a passionate mobile and web application developer with a knack for crafting robust applications. With 2 years of hands-on industry and freelance experience, he has honed his skills in front-end technologies like React and React Native, as well as back-end technologies such as Node.js, Express.js, MongoDB, and Firebase. His goal is to leverage his expertise to create innovative, high-performance solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "06/2024 - Present",
    role: "Cross-Platform App Developer",
    company: "Codistan Ventures",
    description: `As a Cross-Platform Mobile App Developer, I led the development of seamless, high-performance mobile applications using React Native, delivering solutions that work efficiently across both iOS and Android platforms. I collaborated closely with diverse teams, utilizing excellent communication and problem-solving skills to ensure smooth project execution. My technical expertise in developing complex frontends, integrating APIs, optimizing UI/UX, and troubleshooting complex issues consistently resulted in on-time delivery and client satisfaction.`,
    technologies: ["React Native", "Javascript", "IOS", "Android","Node Js"],
  },
  {
    year: "10/2023 – Present",
    role: " Mobile App Developer",
    company: "Smart Kalls Inc",
    description: `As a part-time developer, I am currently leading a project focused on developing a cross-platform mobile application while also contributing to ongoing maintenance efforts. My role involves fixing critical issues, optimizing performance, and developing new modules to enhance the app's functionality. By applying my problem-solving skills and technical expertise in React Native and backend integration, I ensure smooth progress and high-quality results for the project.`,
    technologies: ["React Native", "Javascript", "IOS", "Android","Firebase"],
  },
  {
    year: "07/2022 – 08/2023",
    role: "React Native Full Stack Developer",
    company: "Gameotivity LLC",
    description: `In my first job at Gameotivity, a vibrant startup, I oversaw the development of both the mobile and web applications, delivering engaging products for our gaming community. I chose this startup for its innovative vision and the chance to make a meaningful impact. As the lead developer, I managed the development lifecycle using React, React Native, and Firebase, while mentoring interns to help them grow their skills.`,
    technologies: ["React Native","React", "Javascript", "IOS", "Android","Firebase"],
  }
];

export const PROJECTS = [
  {
    title: "Crowdly",
    image: project1,
    description:
      "A social media app featuring Instagram like social media features, real-time chat, food ordering, cab booking, blood donation coordination, and a support chatbot.",
    technologies: ["React Native", "Firebase", "Socket.IO", "Redux", "Gifted Chat","React Native Maps",],
  },
  {
    title: "Paygeon",
    image: project2,
    description:
      " A client-broker application featuring robust chat functionality, dynamic invite links,and three distinct user interfaces for admin, brokers, and regular users.",
    technologies: ["React Native", "Firebase", "Socket.IO", "Gifted Chat","Stripe","OneSign"],
  },
  {
    title: "Gameotivity Mobile/Web App",
    image: project3,
    description:
      "A gaming mobile app featuring deep linking for seamless navigation, an animated frontend with mirror effects, transparent animations, and shadow backgrounds, creating an immersive user experience. The project also includes a web version built using React.js, take a look at, ‘https://gameotivity.net’.",
    technologies: ["React Native", "React", "Firebase", "Socket.IO"],
  },
  {
    title: "Campsites",
    image: project4,
    description:
      "A camp booking application includes multiple authentications such as Apple and Google auth, community follow/unfollow functionality, private/group chats, maps with directions, geofencing and complex style, a review system for campsites, referral codes, payment processings, and push notifications.",
      technologies: ["React Native", "Socket.IO", "Gifted Chat","Stripe","OneSign","React Native Maps" ]
  },
];

export const CONTACT = {
  address: "House 621/1, Gulzar Street, Lalazaar, Rawalpindi Cantt",
  phoneNo: "+92 313 5293151",
  email: "mb.farhan.m.1.9.9.8@gmail.com",
};
