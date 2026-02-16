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
    icon: "/user/Palak.png",
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
    id: "emify",
    title: "Emify",
    image: "/projects/emify.svg",
    mobileImage: "/projects/emify-mobile.svg",
    link: "",
    year: "2025",
    service: "UI UX Design",
    description: "Emify is a financial application developed by our team that enables users to convert everyday transactions into EMIs without using a credit card. We built a secure and scalable platform focused on accessibility, flexibility, and seamless EMI management for daily use cases.",
  },
  {
    id: "frame-finder",
    title: "Frame Finder",
    image: "/projects/framefinder.svg",
    mobileImage: "/projects/framefinder-mobile.svg",
    link: "https://frame-finder-main.vercel.app/",
    year: "2025",
    service: "Development",
    description: "Frame Finder is a multi-vendor e-commerce platform developed by our team for prescription spectacles. The solution allows users to upload prescriptions and choose frames from multiple vendors, supported by a robust vendor and product management system for a smooth and reliable shopping experience.",
  },
  {
    id: "pankhuri",
    title: "Pankhuri",
    image: "/projects/pankhuri.svg",
    mobileImage: "/projects/pankhuri-mobile.png",
    link: "https://www.pankhuri.co/",
    year: "2025",
    service: "Development",
    description: "Pankhuri is a learning platform developed by our team, enabling users to access courses across multiple categories through subscriptions. We built a flexible admin system for managing and publishing courses, delivering a scalable and user-friendly learning experience.",
  },
  {
    id: "sweetnsour",
    title: "Sweetnsour",
    image: "/projects/sweetnsour.svg",
    mobileImage: "/projects/sweetnsour-mobile.svg",
    link: "https://www.sweetnsour.in/",
    year: "2025",
    service: "Development",
    description: "Sweet n Sour is an e-commerce platform developed by our team for selling pickles online. We built a fully functional admin panel that enables easy management of product categories, products, and customer orders, delivering a smooth and scalable online selling experience.",
  },
  {
    id: "velvet",
    title: "Velvet",
    image: "/projects/velvet.svg",
    mobileImage: "/projects/velvet-mobile.svg",
    link: "",
    year: "2025",
    service: "Development",
    description: "Premium culinary interface for personalized dining experiences.",
  },
  {
    id: "zest",
    title: "Zest",
    image: "/projects/zest.svg",
    mobileImage: "/projects/zest-mobile.svg",
    link: "https://zest-solution-gamma.vercel.app/",
    year: "2025",
    service: "Development",
    description: "Zest Solution is a service showcasing platform developed by our team to present digital marketing services. The platform enables users to explore offerings and connect with the team through an integrated contact form for seamless client communication.",
  },
  {
    id: "dms-solar",
    title: "DMS Solar",
    image: "/projects/dms.svg",
    mobileImage: "/projects/dms-mobile.svg",
    link: " https://www.dmssolars.in/",
    year: "2025",
    service: "Development",
    description: "DMS Solar is a service-focused platform developed by our team for a client offering solar installation services. The platform provides users with clear insights into the installation process, available services, and business offerings, helping convert visitors into informed leads.",
  },
  {
    id: "suraksha-kavach",
    title: "Suraksha Kavach",
    image: "/projects/kavach.svg",
    mobileImage: "/projects/kavach-mobile.svg",
    link: "",
    year: "2025",
    service: "Development",
    description: "Suraksha Kawach empowers individuals with smart, secure, and professional safety solutions—delivering instant alerts, live updates, and trusted support when it matters most.",
  },
  {
    id: "spzaora",
    title: "Spzaora",
    image: "/projects/spazora.svg",
    mobileImage: "/projects/spazora.svg",
    link: "https://www.spzaora.com/",
    year: "2025",
    service: "Development",
    description: "Spzaora is an AI-powered interior design platform developed by our team that allows users to upload room images and generate customized interior design visualizations based on their preferences. The platform also includes multiple subscription plans, enabling users to explore and purchase plans according to their design needs.",
  },
  {
    id: "fito",
    title: "Fito",
    image: "/projects/fito.svg",
    mobileImage: "/projects/fito-mobile.svg",
    link: "",
    year: "2025",
    service: "Development",
    description: "Fito is a fitness and nutrition platform developed by our team that enables users to access personalized diet plans, workout routines, and health insights. The platform also includes a subscription-based model, allowing users to unlock premium features and achieve their fitness goals.",
  },
];

export const mainProjects = [
  {
    title: "Suraksha Kavach",
    subheading: "Personal digitalized Safety",
    description: "In danger? Lost? Need help? We have got you.Suraksha Kawach connects you to guardians, volunteers, and emergency services—instantly",
    // btn: {
    //     text: "Check Program",
    //     link: "https://suraksha.pantharinfohub.com/",
    // }
  },
  {
    title: "Training and Internship",
    subheading: "More Than Learning—A Journey to Excellence",
    description: "Not just tasks. Not just theory. Real projects, real impact. Get mentored, build cool stuff, and shape your future with us",
    // btn: {
    //     text: "Check Program",
    //     link: "https://pantharinfohub.com/training",
    // }
  },
  {
    title: "Department of Science & Tech",
    subheading: "More Than Learning—A Journey to Excellence",
    description: "The Department of Science and Technology (DST) of India promotes scientific research, innovation, and technology development across various sectors",
  },
]

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