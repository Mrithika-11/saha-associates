export interface NavLink {
  label: string;
  path: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Knowledge Center", path: "/knowledge-center" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export const socialLinks = [
  { label: "LinkedIn", url: "https://linkedin.com" },
  { label: "Instagram", url: "https://instagram.com" },
  { label: "Twitter", url: "https://twitter.com" },
];
