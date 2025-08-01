import { LayoutDashboard } from "lucide-react";
import { Handshake } from "lucide-react";
import { Users } from "lucide-react";
import { Calculator } from "lucide-react";
import { FileStack } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Event Solutions", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

export const testimonials = [
  {
    user: "Aarav Mehta",
    company: "Mehta Industries",
    image: user1,
    text: "NextHappen planned our annual corporate meet flawlessly. The attention to detail, logistics, and ambience were simply exceptional!",
  },
  {
    user: "Priya Sharma",
    company: "Sharma Wedding Planners",
    image: user2,
    text: "They turned my sister’s wedding into an unforgettable experience. Every guest complimented the decor and the smooth flow of the event.",
  },
  {
    user: "Rajiv Nair",
    company: "Nair & Associates",
    image: user3,
    text: "Our product launch was a hit thanks to the NextHappen team. Their creativity and professionalism made the entire experience stress-free.",
  },
  {
    user: "Sneha Kapoor",
    company: "Kapoor Enterprises",
    image: user4,
    text: "They handled my father’s 60th birthday celebration beautifully. From catering to lighting, everything was picture-perfect.I am so glad.",
  },
  {
    user: "Manish Verma",
    company: "Verma Developers",
    image: user5,
    text: "NextHappen made our employee awards night feel grand and seamless. The team was friendly, responsive, and executed everything perfectly.",
  },
  {
    user: "Ritika Joshi",
    company: "Joshi Creations",
    image: user6,
    text: "I’m so glad we hired them for our destination wedding. The team managed everything remotely and delivered a magical experience.",
  },
];


export const features = [
  {
    icon: <LayoutDashboard />,
    text: "Centralized Event Dashboard",
    description:
      "Manage all your event details from a single, intuitive dashboard.",
  },
  {
    icon: <Handshake />,
    text: "Smart Vendor Management",
    description:
      "Easily connect with curated vendors for venues, catering, décor, and more.",
  },
  {
    icon: <Users />,
    text: "Real-Time Collaboration",
    description:
      "Work with your team and clients simultaneously for smooth coordination.",
  },
  {
    icon: <Calculator />,
    text: "AI-Powered Budget Estimator",
    description:
      "Get instant cost projections and optimize your event expenses.",
  },
  {
    icon: <FileStack />,
    text: "Customizable Event Templates",
    description:
      "Save time with ready-made layouts for weddings, conferences, concerts, etc.",
  },
  {
    icon: <CheckCircle2 />,
    text: "Automated Task Tracking",
    description:
      "Stay on top of deadlines and logistics with smart task reminders.",
  },
];

export const checklistItems = [
  {
    title: "Choose Your Event Type",
    description:
      "Whether it's a wedding, corporate conference, or private party — start by selecting the type of event you’re planning.",
  },
  {
    title: "Pick Solutions (Venue, Catering, Production, etc.)",
    description:
      "Browse and select from a curated list of top-notch services including venues, catering, décor, and production support.",
  },
  {
    title: "Customize & Confirm",
    description:
      "Tailor every detail to your liking and confirm your selections in just a few clicks.",
  },
  {
    title: "Sit Back & Relax",
    description:
      "Leave the stress behind—our team ensures flawless execution while you enjoy your event.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
