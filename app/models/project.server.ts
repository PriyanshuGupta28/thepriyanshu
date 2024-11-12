export interface ProjectType {
  id: number;
  title: string;
  name: string;
  description: string;
  price: number;
  image?: string[];
  techstack: string[];
  link?: string;
  github?: string;
  alt?: string;
  colSpan?: string;
  rowSpan?: string;
}

const products: ProjectType[] = [
  {
    id: 1,
    title: "Laptop",
    name: "Mechanical Keyboard",
    alt: "Laptop",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    title: "bssp",
    alt: "bssp",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 3,
    title: "Laptop",
    alt: "Laptop",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 4,
    title: "bssp",
    alt: "bssp",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 5,
    title: "Laptop",
    alt: "Laptop",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 6,
    title: "bssp",
    alt: "bssp",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 7,
    title: "Laptop",
    alt: "Laptop",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 8,
    title: "bssp",
    alt: "bssp",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 9,
    title: "bssp",
    alt: "bssp",
    name: "Mechanical Keyboard",
    description: "Premium mechanical keyboard with RGB backlight",
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
];

export function getProjects(): ProjectType[] {
  return products;
}

export async function getOneProject(
  id: number
): Promise<ProjectType | undefined> {
  console.log(
    id,
    products.find((product) => product.id === id)
  );
  return products.find((product) => product.id === id);
}
