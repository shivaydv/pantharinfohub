import { Github, Instagram, Linkedin, X } from "lucide-react";
import user1 from "../public/user/Abhay.png";

export const navItem = [
  {
    name: "About Us",
    link: "/#about",
  },
  {
    name: "team",
    link: "/team",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Career",
    link: "/career",
  },
];

export const Abhay = {
  name: "Abhay Namdev",
  role: "Founder & Chief Executive Officer (CEO)",
  icon: user1,
  about: {
    age: "Age: 20",
    techLevel: "High tech proficiency",
  },
  quote:
    "Abhay Namdev, Founder and CEO of Panthar Infohub Pvt. Ltd., is recognized as the World's Youngest CEO by the International Book of Records. A B.Tech student at AKTU, Lucknow, he combines technical expertise with entrepreneurial drive to lead innovation and empower businesses, inspiring future innovators.",
  socials: [
    {
      icon: <Linkedin className="text-white size-5" />,
      link: "https://www.linkedin.com/in/abhay-namdev121/",
    },
    {
      icon: <Instagram className="text-white size-5" />,
      link: "https://www.instagram.com/abhayxpanthar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ],
}

export const users = [
  {
    ...Abhay
  },
];

export const Teams = [
  {
    icon: "/user/Ankit.jpeg",
    name: "Ankit Bose",
    role: "UX/UI Designer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/ankitbose904/",
      },
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/_ankitbose_002/",
      },
      {
        icon: <X className="text-white size-5" />,
        link: "https://x.com/ankitbose904",
      },
    ],
  },
  {
    icon: "/user/Pulkit.png",
    name: "Pulkit Shukla",
    role: "Front Developer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/pulkit-shukla-207437308/",
      },
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/pulkit_shukla26/",
      },
    ],
  },
  {
    icon: "/user/gagan.png",
    name: "Gagan",
    role: "Full Stack Developer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/gagan-deep-singh-666158238",
      },
      {
        icon: <Github className="text-white size-5" />,
        link: "https://github.com/Gagan-deepp",
      },
    ],
  },
  {
    icon: "/user/Shiva.jpeg",
    name: "Shiva Yadav",
    role: "Full Stack Developer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/shivaydv",
      },
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/shivay1256/",
      },
      {
        icon: <X className="text-white size-5" />,
        link: "https://x.com/shivay1256",
      },
    ],
  },
  {
    icon: "/user/Sharad.jpeg",
    name: "Sharad Sengar",
    role: "App Developer",
    socials: [
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/sharad_sengar",
      },
    ],
  },
  {
    icon: "/user/Raj.jpg",
    name: "Raj Diwedi",
    role: "Backend Engineer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/badenforcer/",
      },
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/badenforcer",
      },
      {
        icon: <Github className="text-white size-5" />,
        link: "https://github.com/badEnforcer",
      },
    ],
  },
  {
    icon: "/user/Rashi.jpeg",
    name: "Rashi Rai",
    role: "Marketing Strategist",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/rashi-rai-b34b8a325",
      },
    ],
  },
  {
    icon: "/user/Vanshika.jpeg",
    name: "Vanshika Saxena",
    role: "Graphic Designer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "linkedin.com/in/vanshika-saxena-9b724929b",
      },
    ],
  },
  {
    icon: "/user/Palak.jpeg",
    name: "Palak",
    role: "Mobile Developer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/palak856",
      },
    ],
  },
  {
    icon: "/user/Sneha.jpg",
    name: "Sneha Sahu",
    role: "Data Analyst",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/snehasahu491",
      },
    ],
  },
  {
    icon: "/user/Aham.jpeg",
    name: "Aham Gupta",
    role: "Graphic Designer",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "linkedin.com/in/aham-gupta-683466379",
      },
    ],
  },
  
];

export const services = [
  {
    title: "Development",
    image: "/assets/Development.png",
    description:
      "We use cutting-edge technologies to create scalable, secure, and high-performing applications. Our development methodology offers seamless functionality and adaptation to your business requirements.",
  },
  {
    title: "UI UX Design",
    image: "/assets/UIUX design.png",
    description:
      "We create visually stunning and user-friendly interfaces that enhance user experience and engagement. Our design process ensures intuitive navigation, seamless interactions, and a visually appealing aesthetic, delivering a memorable and enjoyable user experience.",
  },
  {
    title: "Data Migration",
    image: "/assets/data migration.png",
    description:
      "We migrate data efficiently and securely, ensuring minimal downtime and preserving data integrity. Our migration process is tailored to your specific needs, offering a seamless transition to new systems or platforms.",
  },
  {
    title: "Marketing",
    image: "/assets/Marketing.png",
    description:
      "Our marketing strategy is designed to connect with your audience, engage them, and drive results. We leverage data-driven insights to create campaigns that resonate with your target audience, ensuring maximum impact and ROI.",
  },
];

export const projects = [
  {
    id: "01",
    title: "Frame Finder",
    image: "/projects/1.png",
    link: "https://frame-finder-main.vercel.app/",
    year: "2025",
    role: "Solution",
    description: "A specialized platform designed for finding and managing frames with ease.",
  },
  {
    id: "02",
    title: "Alpharule",
    image: "/projects/3.png",
    link: "https://www.alpharule.co/",
    year: "2025",
    role: "Solution",
    description: "Innovative rule-based system for scaling digital operations.",
  },
  {
    id: "03",
    title: "Sweetnsour",
    image: "/projects/4.png",
    link: "https://www.sweetnsour.in/",
    year: "2025",
    role: "Solution",
    description: "Premium culinary interface for personalized dining experiences.",
  },
  {
    id: "04",
    title: "Pankhuri",
    image: "/projects/5.png",
    link: "https://pankhuri-web.vercel.app/",
    year: "2025",
    role: "Solution",
    description: "Modern web architecture for high-performance applications.",
  },
  {
    id: "05",
    title: "Suraksha Kawach",
    image: "/projects/6.png",
    link: "https://www.surakshakawach.co.in/",
    year: "2025",
    role: "Solution",
    description: "Digital safety companion for instant emergency assistance.",
  },
  {
    id: "06",
    title: "Zest",
    image: "/projects/7.png",
    link: "https://zest-solution-gamma.vercel.app/",
    year: "2025",
    role: "Solution",
    description: "Streamlined business solutions for enhanced productivity.",
  },
  {
    id: "07",
    title: "Spzaora",
    image: "/projects/8.png",
    link: "https://zest-solution-gamma.vercel.app/",
    year: "2025",
    role: "Solution",
    description: "Advanced analytics and management for growing enterprises.",
  },
];

export const CareerRoles = [
  {
    title: "AI/ML Engineer",
    description: "We are looking for an AI/ML Engineer to join our team",
    location: "On Site",
    type: "Full Time",
    tag: ["Python", "Pandas", "NumPy", "TensorFlow", "PyTorch"],
  },
  {
    title: "Full Stack Developer",
    description:
      "We are looking for a Full Stack Developer with expertise in both frontend and backend development",
    location: "On Site",
    type: "Full Time",
    tag: ["React", "Node.js", "Nextjs", "MongoDB", "MySQL", "GCP"],
  },
  {
    title: "App Developer",
    description:
      "We are looking for an App Developer to design and maintain scalable server-side applications",
    location: "On Site",
    type: "Full Time",
    tag: ["Flutter", "KMP", "React Native"],
  },

];