export interface ProjectType {
  id: number;
  title: string;
  name: string;
  description: DescriptionSection[]; // Updated to array of sections
  mainImage: string;
  price?: number;
  image?: string[];
  techstack: string[];
  link?: string;
  github?: string;
  alt?: string;
  colSpan?: string;
  rowSpan?: string;
}

export interface DescriptionSection {
  title: string;
  content?: string;
  list?: string[];
}

const products: ProjectType[] = [
  {
    id: 1,
    title: "Bssp",
    name: "Mechanical Keyboard",
    alt: "Laptop",
    description: [
      {
        title: "Project Overview",
        content:
          "After gathering detailed requirements from our CEO, I developed an application with the following roles and permissions:",
        list: [
          "Admin: Has full access, including management of all users, branches, and projects.",
          "Branch Manager: Can oversee agents in their branch, create quotations, and start projects.",
          "Agent: Limited to their projects; they can create, manage, and finalize quotations and start new projects.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "The app enables agents to create quotations for potential solar installations, categorized into Residential and Commercial. Here’s how it works:",
        list: [
          "Form Completion: Agents fill out a detailed form based on the project type (Residential or Commercial). This extensive form gathers essential data, validated at each step.",
          "Calculation & Validation: Once all fields are filled, agents click 'Validate and Calculate.' The backend verifies the data and sends a calculation back to the frontend for display.",
          "PDF Generation: After finalizing the information, agents can click 'Generate PDF.' This triggers a backend request, which generates the PDF in Base64 format and sends it to the frontend for viewing.",
          "Customer Copy & Cloud Storage: Upon submission, the finalized PDF is sent to the customer and saved securely in the cloud. If the agent makes changes to the form, the PDF is invalidated, and they must revalidate and regenerate it.",
        ],
      },
      {
        title: "Quotation Management",
        content:
          "All generated quotations are displayed in a Quotation Table with key details. Agents can:",
        list: [
          "View PDFs: Clicking 'View PDF' opens a drawer displaying the specific PDF document.",
          "Consumer Onboarding: Agents can onboard consumers from the table, navigating to a 3-step process with built-in validation. They cannot proceed without completing each section.",
        ],
      },
      {
        title: "Consumer Table & Project Initiation",
        content:
          "On the Consumer Table, agents can view all onboarded consumers. Each row includes:",
        list: [
          "Consumer Information: Clicking 'Info' reveals detailed consumer data.",
          "Start Project: Agents can initiate a project based on a selected quotation. The project creation is a 5-step process, each step requiring completion before proceeding to the next.",
        ],
      },
      {
        title: "Project Tracking & Phases",
        content:
          "Once a project is started, it appears on the Home Page for easy tracking. Each project is divided into phases:",
        list: [
          "Phase Updates: Agents update each phase as the project progresses, keeping track of milestones and project status in real-time.",
        ],
      },
      {
        title: "Technical Highlights",
        content:
          "On the Consumer Table, agents can view all onboarded consumers. Each row includes:",
        list: [
          "Role-Based Access Control: Implemented strict access control to limit actions based on user roles.",
          "PDF Handling: Efficiently generated, displayed, and stored PDFs using a seamless backend-front integration with Base64 encoding.",
          "Real-Time Project Updates: Phased project tracking gives agents a clear view of project stages and allows for systematic updates.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://plus.unsplash.com/premium_photo-1686050878751-89499d28d153?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: [
      "https://images.unsplash.com/photo-1710200554090-35b36b398ee4?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1716709797897-644623d7c48f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    techstack: ["React", "Next.js", "Tailwind CSS"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    title: "Bsccl",
    alt: "bssp",
    name: "Mechanical Keyboard",
    description: [
      {
        title: "Project Overview",
        content:
          "After gathering requirements from our CEO, I developed a secure, user-friendly web application that extends the functionality of our existing banking software. The goal was to allow clients to view their transaction history, personal account details, account type, and other essential information on a responsive web interface.",
      },
      {
        title: "Tech Stack and Architecture",
        content: "",
        list: [
          "Database: Microsoft SQL",
          "Backend: Node.js with Express.js routes for robust backend handling",
          "Frontend: React.js for a smooth, dynamic user experience",
        ],
      },
      {
        title: "Key Features and Implementations",
        content: "User Authentication:",
        list: [
          "Authentication is handled through a mobile number-based login, ensuring a secure and personalized experience.",
          "OTP Verification: Using MSG91, the backend sends an OTP to the user’s registered mobile number. Upon entering their number on the frontend, the application checks its existence in our database, sends an OTP, and upon successful verification, grants access.",
          "If verified, users are redirected to the homepage, where their account details and transaction data are fetched securely using their verified mobile number.",
        ],
      },
      {
        title: "Frontend Navigation and Access Control:",
        list: [
          "Home Page Access: Only accessible to authenticated users, ensuring secure data visibility.",
          "Conditional Page Access: Logged-in users are redirected to the homepage and cannot re-access the login page without logging out, streamlining the user experience and reinforcing security.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1731286507379-94216c27cf9d?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1716490710550-9844f5a98999?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Features Developed",
        list: [
          "Form Completion: Agents fill out a detailed form based on the project type (Residential or Commercial). This extensive form gathers essential data, validated at each step.",
          "Calculation & Validation: Once all fields are filled, agents click 'Validate and Calculate.' The backend verifies the data and sends a calculation back to the frontend for display.",
          "PDF Generation: After finalizing the information, agents can click 'Generate PDF.' This triggers a backend request, which generates the PDF in Base64 format and sends it to the frontend for viewing.",
          "Customer Copy & Cloud Storage: Upon submission, the finalized PDF is sent to the customer and saved securely in the cloud. If the agent makes changes to the form, the PDF is invalidated, and they must revalidate and regenerate it.",
        ],
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    mainImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
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
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1488711500009-f9111944b1ab?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    description: [
      {
        title: "Project Overview",
        content:
          "As the lead frontend developer, I created the BSSP website to manage solar project workflows with roles like Admin, Branch Manager, and Agent.",
      },
      {
        title: "Roles",
        list: [
          "Admin: Full access to manage users, branches, and projects.",
          "Branch Manager: Oversees agents in their branch, creates quotations, and starts projects.",
          "Agent: Manages their own projects and can create quotations.",
        ],
      },
      {
        title: "Quotation System",
        content:
          "Agents create quotations categorized as Residential or Commercial. Each project includes:",
        list: [
          "Form Completion: Agents fill a form validated in real-time for project data.",
          "Calculation & Validation: Backend calculates and verifies data before displaying it.",
          "PDF Generation: Agents generate PDF previews, reviewed and stored in the cloud upon submission.",
        ],
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1500835176302-48dbd01f6437?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
