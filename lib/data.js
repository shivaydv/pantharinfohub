import { Github, Instagram, Linkedin, X } from "lucide-react";
import design from "../public/service/design.png";
import dev from "../public/service/dev.jpg";
import discovery from "../public/service/discovery.png";
import market from "../public/service/market.png";
import user1 from "../public/user/Abahy.jpg";
import abhayFull from "../public/user/AbahyFull.jpg";
import user2 from "../public/user/Abhishek.jpg";
import AbhishekFull from "../public/user/AbhishekFull.jpg";
import ankit from "../public/user/Ankit.jpg";
import gagan from "../public/user/gagan.png";
import geetansh from "../public/user/Geetansh.jpg";
import pulkit from "../public/user/Pulkit.jpg";
import raj from "../public/user/Raj.jpg";
import sneha from "../public/user/Sneha.jpg";

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

export const users = [
  {
    name: "Abhay Namdev",
    role: "Founder & Chief Executive Officer (CEO)",
    icon: user1,
    fullImg: abhayFull,
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
      {
        icon: <Github className="text-white size-5" />,
        link: "#",
      },
    ],
  },
  {
    name: "Abhishekh Pal",
    role: "Co-founder & Chief Marketing Officer (CMO)",
    icon: user2,
    fullImg: AbhishekFull,
    about: {
      age: "Age 21",
      techLevel: "High tech proficiency",
    },
    quote:
      "Abhishek Pal, Co-founder and CMO of Panthar Infohub Pvt. Ltd., combines technical expertise with innovative marketing. A B.Tech student at AKTU, Lucknow, he drives data-driven strategies to empower businesses and shape a smarter, safer future.",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "http://linkedin.com/in/abhishek-pal-940a5524b",
      },
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/palxpanthar/",
      },
      {
        icon: <Github className="text-white size-5" />,
        link: "#",
      },
    ],
  },
];

export const Teams = [
  {
    icon: ankit,
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
    icon: raj,
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
    icon: gagan,
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
    icon: geetansh,
    name: "Geetansh Diwedi",
    role: "Data Analyst",
    socials: [
      {
        icon: <Linkedin className="text-white size-5" />,
        link: "https://www.linkedin.com/in/geetansh2002",
      },
      {
        icon: <Instagram className="text-white size-5" />,
        link: "https://www.instagram.com/geetanshdwivedi",
      },
    ],
  },
  {
    icon: sneha,
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
    icon: pulkit,
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
];

export const services = [
  {
    title: "Discovery",
    image: discovery,
    description:
      "We conduct in-depth research and analysis to grasp your needs, challenges, and objectives. This rigorous process ensure as strong foundation for developing precise, high-impact solutions.",
  },
  {
    title: "Design",
    image: design,
    description:
      "Our design team specializes in creating visually striking and intuitively seamless experiences. From UI/UX to branding, we meticulously craft designs that not only capture attention but also establish a meaningful connection with your target audience, ensuring lasting engagement and impact.",
  },
  {
    title: "Development",
    image: design,
    description:
      "We use cutting-edge technologies to create scalable, secure, and high-performing applications. Our development methodology offers seamless functionality and adaptation to your business requirements.",
  },
  {
    title: "Marketing",
    image: market,
    description:
      "To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.",
  },
];

export const projects = [
  {
    id: "01",
    title: "Suraksha Kawach",
    subheading: "Personal digitalized Safety",
    description:
      "In danger? Lost? Need help? We’ve got you. Suraksha Kawach connects you to guardians, volunteers, and emergency services—instantly.",
    image: "/assets/project-showcase.png",
    year: "2025",
    role: "Safety Platform",
    services: ["Mobile App", "Backend", "UI/UX"],
    btn: {
      text: "Check Program",
      link: "https://suraksha.pantharinfohub.com/",
    },
  },
  {
    id: "02",
    title: "Training and Internship",
    subheading: "More Than Learning—A Journey to Excellence",
    description:
      "Not just tasks. Not just theory. Real projects, real impact. Get mentored, build cool stuff, and shape your future with us.",
    image: "/assets/project-showcase.png",
    year: "2024",
    role: "EdTech",
    services: ["Web Platform", "LMS", "Mentorship"],
    btn: {
      text: "Check Program",
      link: "https://pantharinfohub.com/training",
    },
  },
  {
    id: "03",
    title: "Archin",
    subheading: "Business Excellence",
    description:
      "We've helped businesses across industries achieve their goals. Here are some of our selected works.",
    image: "/assets/project-showcase.png",
    year: "2025",
    role: "Corporate",
    services: ["Website Design", "Product Design", "Branding"],
  },
  {
    id: "04",
    title: "Quantum",
    subheading: "Tech Innovation",
    description:
      "Pushing boundaries in design and technology to create memorable user experiences.",
    image: "/service/discovery.png",
    year: "2023",
    role: "Deep Tech",
    services: ["Research", "Prototyping", "UI/UX"],
  },
];

export const dummyCarrer = [
  {
    title: "AI/ML Engineer",
    description: "We are looking for an AI/ML Engineer to join our team",
    location: "On Site",
    type: "Full Time",
    tag: ["Python", "Pandas", "NumPy", "TensorFlow", "PyTorch"],
  },
  {
    title: "Mobile Engineer",
    description:
      "We are looking for a Mobile Engineer with expertise in Android or iOS development",
    location: "On Site",
    type: "Full Time",
    tag: ["Kotlin", "Java", "Swift", "Jetpack Compose", "Flutter"],
  },
  {
    title: "Video Editor",
    description: "We are looking for a creative Video Editor to join our content production team",
    location: "Remote",
    type: "Freelance",
    tag: ["Adobe Premiere Pro", "Final Cut Pro", "After Effects", "DaVinci Resolve"],
  },
  {
    title: "Backend Developer",
    description:
      "We are looking for a Backend Developer to design and maintain scalable server-side applications",
    location: "On Site",
    type: "Full Time",
    tag: ["Node.js", "Django", "Spring Boot", "MongoDB", "MySQL"],
  },
  {
    title: "Marketing Head",
    description:
      "We are looking for a Marketing Head to lead our digital and brand marketing strategies",
    location: "Hybrid",
    type: "Full Time",
    tag: ["SEO", "Social Media Marketing", "Google Ads", "Content Marketing"],
  },
  {
    title: "Graphic Designer",
    description: "We are looking for a Graphic Designer to create engaging visuals for our brand",
    location: "Remote",
    type: "Part Time",
    tag: ["Adobe Photoshop", "Illustrator", "Figma", "Canva"],
  },
];

export const testimonials = [
  {
    name: "Raj Sharma",
    role: "Student",
    image:
      "https://plus.unsplash.com/premium_photo-1682091992663-2e4f4a5534ba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    text: "Amazing instructors and great community support. The job placement assistance helped me get multiple offers!",
  },
  {
    name: "Nirmala Singh",
    role: "Full stack Developer",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMF9waG90b19vZl95b3VuZ19zb3V0aF9hc2lhbl9naXJsX2hvbGRpbmdfc3R1ZF8xOTQyYTRkYi01YjA5LTQ2NDItYjc0YS04YjU4MjdiYjhjMjhfMi5qcGc.jpg",
    rating: 5,
    text: "Best investment I made for my career. The practical approach and real-world projects made all the difference.",
  },
  {
    name: "Arpit Newton",
    role: "React Developer",
    image:
      "https://img.freepik.com/premium-photo/indian-college-student-standing-with-bag-reading-book-white-background_75648-5434.jpg",
    rating: 5,
    text: "The course content is up-to-date with industry standards. I feel confident tackling any development challenge now.",
  },
  {
    name: "Anjum Sharma",
    role: "Full Stack Engineer",
    image:
      "https://media.istockphoto.com/id/1369754239/photo/university-student-in-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=LjFVDfjusWBjYTNliHV9DyXfApPGc8DmgBGEtfVgQ0Q=",
    rating: 5,
    text: "Excellent course structure and supportive community. The mentors are always available to help and guide.",
  },
  {
    name: "Sharad Kumar",
    role: "Frontend Developer",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg",
    rating: 5,
    text: "From a non-tech background to landing a software engineer role - this course made it possible. Highly recommended!",
  },
  {
    name: "Rohit Gupta",
    role: "DevOps Engineer at Swiggy",
    image:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The practical projects and industry exposure gave me the confidence to switch careers successfully. Worth every penny!",
  },
];
