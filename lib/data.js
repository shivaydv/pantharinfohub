import { Github, Instagram, Linkedin, X } from "lucide-react";
import user1 from "../public/user/Abhay.png";
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