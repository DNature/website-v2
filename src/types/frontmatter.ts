export interface FrontmatterHeading {
  level: string | number;
  text: string;
  id: string;
}

export interface Frontmatter {
  slug?: string;
  title: string;
  description?: string;
  editUrl?: string;
  imageUrl?: string;
  readTime?: string;
  auth?: {
    avatarUrl?: string;
    githubUrl?: string;
    name?: string;
    websiteUrl?: string;
    twitterUsername?: string;
  };
  tags: string[];
  lastEdited?: {
    date: string;
    author: string;
  };
  published?: {
    date: string;
    author: string;
  };
}
