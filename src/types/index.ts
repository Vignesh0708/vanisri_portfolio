export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}


export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}