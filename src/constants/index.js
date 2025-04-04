import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Graphic Designing",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "Full-stack Development",
    icon: backend,
  },
  {
    title: "Digital marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graphic Designing",
    company_name: "",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
      "Our graphic design work spans branding, logo creation, digital illustrations, marketing materials, and social media graphics, delivering visually striking solutions for various industries.",
      "We specialize in crafting cohesive and memorable brand identities, ensuring consistency across print and digital platforms to enhance recognition and appeal.",
      " From web graphics to animated content, our designs merge creativity with purpose, tailored to engage audiences and meet client goals effectively.",
      "Using industry-leading tools and staying updated with design trends, we produce professional, impactful visuals that elevate communication and storytelling.",
    ],
  },
  {
    title: "App development",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
      "We design and develop high-performance, user-friendly applications for iOS, Android, and web platforms, tailored to meet specific business needs and user demands.",
      "Our apps feature intuitive interfaces and smooth navigation, ensuring an engaging user experience backed by responsive design principles.",
      "We build scalable, secure backend systems with APIs, cloud integration, and strong data protection to ensure reliability and performance.",
      "Leveraging frameworks like Flutter, React Native, and native development, we create future-ready apps with fast deployment and cross-platform compatibility.",
    ],
  },
  {
    title: "Full-stack development",
    company_name: "",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2024 - Jan 2025",
    points: [
      "We handle both frontend (UI/UX, React, Angular) and backend (Node.js, Django, .NET) development, delivering seamless, integrated web and mobile applications.",
      "Our solutions feature cloud-ready, microservices-based designs with RESTful/GraphQL APIs for high performance and future growth.",
      " From SQL (PostgreSQL, MySQL) to NoSQL (MongoDB) databases, coupled with CI/CD pipelines (Docker, AWS, Kubernetes), we ensure efficient deployment and management.",
      "Built-in authentication (OAuth, JWT), encryption, and compliance, alongside AI/IoT integrations, keep applications secure and ahead of tech trends.",
    ],
  },
  {
    title: "Digital marketing",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "We craft targeted strategies across SEO, PPC, and social media, leveraging analytics to maximize ROI and audience engagement.",
      " From viral social content to high-converting email campaigns, we blend creativity with strategy to amplify brand visibility and loyalty.",
      "A/B testing, conversion rate optimization (CRO), and AI-powered tools ensure campaigns evolve for peak efficiency and scalability.",
      "Integrated campaigns span Google Ads, Meta, LinkedIn, and emerging platforms (TikTok, Programmatic Ads) for seamless customer journeys.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Arjun P.",
    designation: "CFO",
    company: "TechieGreeks",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Diego M.",
    designation: "COO",
    company: "TechieGreeks",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Fahim Z.",
    designation: "CTO",
    company: "TechieGreeks",
    image: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    testimonial:
      "Their designs brought our brand to life—clean, creative, and perfectly on message!",
    name: "Sarah K.",
    designation: "CLO",
    company: "TechieGreeks",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The app they built exceeded our expectations—sleek, fast, and loved by our users!",
    name: "Priya R.",
    designation: "CTO",
    company: "TechieGreeks",
    image: "https://images.pexels.com/photos/920377/pexels-photo-920377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    testimonial:
      "From frontend to backend, their team delivered a flawless, scalable solution. Highly recommend!",
    name: "James L.",
    designation: "CTO",
    company: "TechieGreeks",
    image: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.rentrip.in/rent-car/ghaziabad",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://remote.co/remote-jobs/it",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.tourmyindia.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
