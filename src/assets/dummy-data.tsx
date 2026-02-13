import { CodeIcon, LayoutIcon, RocketIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <CodeIcon className="w-6 h-6" />,
        title: 'Full-Stack Development',
        desc: 'Building modern, responsive, and user-focused web applications using MERN stack and Next.js.'
    },
    {
        icon: <LayoutIcon className="w-6 h-6" />,
        title: 'Graphic Design',
        desc: 'Creating visually stunning designs that enhance user experience and brand identity.'
    },
    {
        icon: <RocketIcon className="w-6 h-6" />,
        title: 'Entrepreneurship',
        desc: 'Founder & CEO of SnapperUI, focused on building impactful tech products globally.'
    }
];

export const skillsData = [
    "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Git", "GitHub", "REST APIs", "Responsive Design"
];

export const plansData = [
    {
        id: 'landing',
        name: 'React/Next Website',
        price: 'Starting $85',
        desc: 'Perfect for startups and personal branding.',
        credits: 'One-time',
        features: [
            'Modern UI/UX Design',
            'Fully Responsive',
            'SEO Optimization',
            'Fast Performance',
            'Speed Optimization',
            'And Many More...'
        ],
        link: 'https://www.fiverr.com/devshahmir/build-a-modern-responsive-react-or-nextjs-website'
    },
    {
        id: 'fullstack',
        name: 'Full-Stack App',
        price: 'Starting $99',
        desc: 'Scalable MERN stack applications.',
        credits: 'Custom',
        features: [
            'Functional Website',
            'Responsive Design',
            'Database & API',
            'Advanced Security',
            'Priority Support',
            'And Many More...'
        ],
        popular: true,
        link: 'https://www.fiverr.com/devshahmir/build-a-full-stack-mern-web-application-or-saas-platform'
    },
    {
        id: 'design',
        name: 'Graphic Design',
        price: 'Starting $5',
        desc: 'Premium branding and social assets.',
        credits: 'Fixed',
        features: [
            'Logo & Branding',
            'Social Media Assets',
            'Custom Illustrations',
            'Multi-format Exports',
            'Fast Turnaround',
            'And Many More...',
        ],
        link: 'https://wa.me/923252862245'
    }
];

export const faqData = [
    {
        question: 'What is your primary tech stack?',
        answer: 'I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js for building scalable full-stack applications.'
    },
    {
        question: 'How long does a typical project take?',
        answer: 'Simple landing pages typically take 3-5 days, while complex full-stack applications can take 2-4 weeks depending on the scope.'
    },
    {
        question: 'Do you offer ongoing support?',
        answer: 'Yes, I provide maintenance and support packages to ensure your application remains updated and performs optimally.'
    },
    {
        question: 'How can I hire you?',
        answer: 'You can hire me directly via WhatsApp using the Contact Me Button or hire me through my Fiverr/LinkedIn/Instagram profiles linked on this site.'
    }
];

export const projectsData = [
    {
        title: "SnapperUI",
        desc: "A high-end, production-ready UI library for designers and developers.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Tailwind", "Motion"],
        link: "https://snapperui.com"
    },
    {
        title: "Distributed Nexus",
        desc: "Enterprise-grade cloud infrastructure visualization dashboard.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        tags: ["Next.js", "Three.js", "AWS"],
        link: "#"
    },
    {
        title: "MERN Commerce",
        desc: "Scalable e-commerce platform with automated logistics integration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        tags: ["MongoDB", "Express", "Node"],
        link: "#"
    },
    {
        title: "AI Alpha Shell",
        desc: "Next-gen code assistant with real-time feedback loops.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        tags: ["Python", "PyTorch", "React"],
        link: "#"
    }
];

export const footerLinks = [
    {
        title: "Navigation",
        links: [
            { name: "Home", url: "#home" },
            { name: "About", url: "#about" },
            { name: "Skills", url: "#skills" },
            { name: "Contact", url: "#contact" }
        ]
    },
    {
        title: "SnapperUI",
        links: [
            { name: "Website", url: "https://snapperui.com" },
            { name: "Resources", url: "https://snapperui.com/resources" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/shahmir-qureshi-162200252/" },
            { name: "GitHub", url: "https://github.com/ShahmirAliQureshii" },
            { name: "Instagram", url: "https://www.instagram.com/devshahmir/" },
            { name: "Email", url: "mailto:contact@snapperui.com" }
        ]
    }
];