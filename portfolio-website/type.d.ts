type IconName =
  | "mail"
  | "phone"
  | "linkedin"
  | "github"
  | "mapPin"
  | "briefcase"
  | "graduationCap"
  | "code"
  | "menu"
  | "x"
  | "user"
  | "sparkles";

type ContactData = {
  email: string;
  phone: string;
  location: string;
};

type HomePageData = {
  name: string;
  title: string;
  profile: string;
  skills: SkillCategory;
  interests: Interest[];
};

type SkillCategory = {
  primary: string[];
  secondary: string[];
};

type Interest = {
  title: string;
  description: string;
};

type Project = {
  title: string;
  description: string;
  points: string[];
  tags: string[];
};

type ProjectsPageData = {
  projects: Project[];
};

// types/education.ts

type EducationData = {
  education: {
    degree: string;
    university: string;
    location: string;
    duration: string;
    details: string;
    courses: string[];
  };
};

type PortfolioData = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  profile: string;
  skills: {
    primary: string[];
    secondary: string[];
  };
  interests: {
    title: string;
    description: string;
  }[];
  education: {
    degree: string;
    university: string;
    location: string;
    duration: string;
    details: string;
    courses: string[];
  };
  projects: {
    title: string;
    description: string;
    points: string[];
    tags: string[];
  }[];
};
