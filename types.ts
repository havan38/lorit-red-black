export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}