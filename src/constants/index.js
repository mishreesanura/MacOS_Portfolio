const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Featured",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Feb 2026",
    title: "Ritu: AI-Powered Period Tracking and Wellness Platform",
    image: "/images/ritu-1.png",
    link: "https://ritu-period-tracking.vercel.app/",
  },
  {
    id: 2,
    date: "Mar 2026",
    title: "Finsight.AI: Natural-Language Data Analytics Agent",
    image: "/images/project-2.png",
    link: "https://github.com/mishreesanura/insightx-chat",
  },
  {
    id: 3,
    date: "Nov 2025",
    title:
      "Veracity: AI-Powered Misinformation Detection and Crisis Intelligence",
    image: "/images/project-3.png",
    link: "https://github.com/mishreesanura/Veracity",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "C", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    category: "Backend and AI",
    items: ["Node.js", "FastAPI", "MCP", "Google ADK"],
  },
  {
    category: "Data and ML",
    items: ["MongoDB", "PostgreSQL", "DuckDB", "SciPy", "NumPy", "Pandas"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Replit", "Cline MCP"],
  },
];

const socials = [
  {
    id: 1,
    text: "GitHub",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/mishreesanura",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/mishreesanura",
  },
  {
    id: 3,
    text: "Email",
    icon: "/icons/user.svg",
    bg: "#4bcb63",
    link: "mailto:mishreesanura17@gmail.com",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Hackathons",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Projects",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Work",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "Teams",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Highlights",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Ritu AI Wellness Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Ritu Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Ritu is an AI-powered menstrual tracking and wellness platform built during a hackathon.",
            "It uses Next.js, MongoDB, and Clerk to deliver a secure and responsive experience.",
            "The platform includes an emotional journaling chatbot that adapts to phase and mood patterns.",
            "It also provides personalized recommendations for skincare, nutrition, hydration, exercise, and self-care.",
          ],
        },
        {
          id: 2,
          name: "ritu-period-tracking.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://ritu-period-tracking.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Ritu Screenshots",
          icon: "/images/folder.png",
          kind: "folder",
          position: "top-52 right-80",
          windowPosition: "top-[10vh] left-20",
          children: [
            {
              id: 1,
              name: "ritu-1.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-10",
              imageUrl: "/images/ritu-1.png",
            },
            {
              id: 2,
              name: "ritu-2.jpeg",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-44",
              imageUrl: "/images/ritu-2.jpeg",
            },
            {
              id: 3,
              name: "ritu-3.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-5 left-80",
              imageUrl: "/images/ritu-3.png",
            },
            {
              id: 4,
              name: "ritu-4.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-56 left-10",
              imageUrl: "/images/ritu-4.png",
            },
            {
              id: 5,
              name: "ritu-5.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-56 left-44",
              imageUrl: "/images/ritu-5.png",
            },
            {
              id: 6,
              name: "ritu-6.png",
              icon: "/images/image.png",
              kind: "file",
              fileType: "img",
              position: "top-56 left-80",
              imageUrl: "/images/ritu-6.png",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Finsight.AI Analytics Agent",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Finsight.AI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Finsight.AI is a natural-language analytics platform for digital payment transaction data.",
            "It uses an optimized DuckDB SQL pipeline and a Next.js plus FastAPI architecture.",
            "The interface supports dynamic visualizations generated from structured LLM responses.",
            "Persistent chat sessions were implemented with MongoDB, including create, rename, history, and delete support.",
          ],
        },
        {
          id: 2,
          name: "github.com/mishreesanura/insightx-chat",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mishreesanura/insightx-chat",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "finsight-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },
    {
      id: 7,
      name: "Veracity AI Intelligence Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Veracity Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Veracity is an MCP-based agentic AI platform for misinformation detection and crisis intelligence.",
            "It ingests live social streams from X, Reddit, and Instagram with an event-driven pipeline.",
            "A contextual RAG truth engine verifies claims against trusted sources and returns explainable scores.",
            "Graph-based analysis helps detect coordinated inauthentic behavior and bot-driven disinformation patterns.",
          ],
        },
        {
          id: 2,
          name: "github.com/mishreesanura/Veracity",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/mishreesanura/Veracity",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "veracity-preview.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "profile-1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/gal1.png",
    },
    {
      id: 2,
      name: "profile-2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/gal2.png",
    },
    {
      id: 3,
      name: "profile-3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/gal3.png",
    },
    {
      id: 4,
      name: "about-mishree.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Mishree Sanura - Builder, Leader, and AI Developer",
      image: "/images/gal4.png",
      description: [
        "I am Mishree Sanura, a B.Tech Information Technology student at Dwarkadas J. Sanghvi College of Engineering (2023 to 2027), currently with a CGPA of 8.7.",
        "I focus on building AI-powered products and modern web platforms using Next.js, React, and data-driven backend systems.",
        "My recent projects include Ritu, Finsight.AI, Veracity, and RaahReview, where I worked across product thinking, full-stack development, and collaborative execution.",
        "I am a Smart India Hackathon 2024 winner and have led high-performing teams while staying deeply hands-on with engineering and design.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Mishree_Sanura_Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
