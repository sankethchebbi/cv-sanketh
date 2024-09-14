import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import {
	BimLogo,
	CDGOLogo,
	ConsultlyLogo,
	ParabolLogo
} from "@/images/logos";

export const RESUME_DATA = {
  name: "Sanketh Chebbi",
  initials: "SC",
  location: "Bangalore, KA, India",
  about:
    "Full stack Quant SWE. Engineer. Enthusiast. Theoretical Math & Physics Fanatic.",
  summary:
    "I'm young and energetic. When you work with me, you get someone who's super enthusiastic, always curious, and determined to solve problems the right way. I value resourcefulness, a strong sense of ownership, high agency, clear communication, and a 'founder mode'—qualities I look for in others and always strive to embody myself. generalist > specialist. mind > matter. To mars 🚀",
  avatarUrl: "https://sankethchebbi.github.io/images/profile.png",
  personalWebsiteUrl: "https://sanketh.in",
  contact: {
    email: "sanketh@duck.com",
    tel: "+919739885400",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sankethchebbi",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sankethchebbi/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/sankethchebbi",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "PES Universty",
      degree: "Bachelor's Degree in Mechanical Engineering.",
      start: "2020",
      end: "2024",
    },
  ],
	work: [
	{
      company: "Indian Space Research Organisation - ISTRAC",
      link: "https://www.isro.gov.in/ISTRAC.html",
      badges: ["On-site"],
      title: "Scientist Engineer Intern",
      logo: ConsultlyLogo,
			start: "2024",
			end: "2024",
      description:
        "I automated the design of the Back-up structure of a Reflector Parabolic Antenna using Galapagos and Grasshopper, optimizing for efficiency using Genetic Algorithm - less deflection and more stiffness. Additionally, I developed new truss analysis software in Python, enhancing structural analysis capabilities using numerical methods like SMM - Stiffness Matrix Method. I also conducted EDA on departmental and project budgets, providing valuable insights for better resource management.",
		},
		{
      company: "Blackspades",
      link: "https://blackspades.pages.dev",
      badges: ["Self Employed"],
      title: "Generalist",
      logo: ConsultlyLogo,
			start: "2023",
			end: "2024",
      description:
        "Founded a small company with my friends from uni to consult startups on AI, marketing and content creation. Pivoted midway to start a fund to invest in hype and sneakers for my mates in college. Both failed but learned a lot and made a lot of friends and memories.",
    },
    {
      company: "Mainstreet Marketplace",
      link: "https://mainstreet.co.in",
      badges: ["Remote"],
      title: "CRM Tech Lead",
      logo: ConsultlyLogo,
			start: "2023",
			end: "2023",
      description:
        "Worked on building out a robust CRM platform. I also built a data site using React and Bootstrap, pulled in data from the shopify storefront APIs and made a unified platform for our team members to work on. for ex: updating the delivery or procurement status of a product.",
    },
    {
      company: "Groww",
      link: "https://groww.in",
      badges: ["On-site"],
      title: "SDE Intern",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "I worked on the iOS app of Groww using React Native. I got to work on problems like Dynamic Font Scaling in React Native and migrating our codebase from Redux to Redux Toolkit. Learning about the working of React Native under the hood, State management in React, aligning UI components, JS code obfuscation and more, I got to tinker around the space a lot.",
    },
  ],
  skills: [
    "Python",
    "C++",
    "React/VueJS",
    "Rust",
    "OCaml",
    "PostgreSQL",
		"AWS",
		"Prompt Engineering",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },

    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
