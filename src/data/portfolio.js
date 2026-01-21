export const portfolioData = {
  name: "Keshav Agarwal",
  role: "Computer Science Engineering Student",
  email: "keshav003ag@gmail.com",
  phone: "+91 (123) 456-7890",
  location: "India",
  bio: "Tech Enthusiast | Aspiring in Business & Finance | Open to Growth",
  longBio:
    "Third-year Computer Science Engineering student with experience in full-stack development and data analytics (Excel, Power BI). Passionate about technology, business, and finance, with a strong problem solving mindset and a focus on building impactful, data-driven solutions.",
  social: {
    github: "https://github.com/Keshav1100",
    linkedin: "https://www.linkedin.com/in/keshav-agarwal-674a211b1/",
    twitter: "https://x.com/agarwalkeshav_",
    instagram: "https://www.instagram.com/agarwalkeshav/",
  },
  skills: {
    development: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    analytics: ["SQL", "Excel", "PowerBI"],
  },
};

export const projects = [
  {
    id: 1,
    title: "Nike website Clone",
    category: "Development",
    description: "A beautiful clone of Nike's e-commerce website built with Tailwind CSS.",
    image: `${process.env.PUBLIC_URL}/images/nike_clone.png`,
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Keshav1100/Practice-Projects/tree/main/Tailwind%20Practice/Project_1_Nike_Clone",
    liveDemo: "https://nike-clone-ecommerce-frontend.netlify.app/",
  },
  {
    id: 2,
    title: "JS 30 Days 30 Projects",
    category: "Development",
    description: "A collection of 30 JavaScript projects in 30 days showcasing vanilla JS skills.",
    image: `${process.env.PUBLIC_URL}/images/project30days.png`,
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Keshav1100/JS-Projects/",
    liveDemo: "https://keshav1100.github.io/JS-Projects/",
  },
  {
    id: 3,
    title: "iPhone 15 Pro Landing Page",
    category: "Development",
    description: "A modern landing page for iPhone 15 Pro with smooth animations.",
    image: `${process.env.PUBLIC_URL}/images/project_img_3.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Keshav1100/iPhone15-Homepage",
    liveDemo: "https://iphone15proclonehome.netlify.app/",
  },
  {
    id: 4,
    title: "UPI Transactions Analysis Dashboard",
    category: "Analytics",
    description: "An interactive Power BI dashboard analyzing UPI transaction trends, bank performance, customer behavior, and payment methods with comprehensive data insights.",
    image: `${process.env.PUBLIC_URL}/images/UPI_Transactions_Analysis.png`,
    technologies: ["Power BI", "Excel", "Power Query", "DAX"],
    github: "https://github.com/Keshav1100/UPI_Transactions_Analysis",
  },
];

export const categories = ["All", "Development", "Analytics"];
