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
  title?: string;
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
      "https://4kwallpapers.com/images/wallpapers/your-name-shooting-3840x2160-14938.jpg",
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
    title: "bsre",
    alt: "Bsre",
    name: "Mechanical Keyboard",
    description: [
      {
        title: "Project Overview",
        content:
          "I developed and deployed the company's website on Vercel, securing a custom domain for professional online accessibility. Vercel's hosting ensures fast loading and reliable uptime, and the deployment process enables seamless updates and scalability for future needs. This setup allows the company to manage their online presence effortlessly and offer a reliable, high-performance experience to visitors.",
      },
      {
        title: "Key Features and Page Descriptions",
        content: "Landing Page with Animation:",
        list: [
          "A visually captivating landing page with animations to capture user interest immediately. Leveraging motion effects, smooth transitions, and engaging visuals, the homepage provides an intuitive overview of the company's mission, services, and core values.",
        ],
      },
      {
        title: "About Us:",
        list: [
          "This section presents the company’s story, mission, and values with a well-organized layout. Designed to reflect the brand identity, this page features team photos, an animated timeline of the company’s history, and a summary of achievements.",
        ],
      },
      {
        title: "Products:",
        list: [
          "A detailed, organized showcase of the company's products, with each product displayed in its own card. Each card includes a title, description, images, and relevant specifications to help customers understand product features and benefits at a glance.",
        ],
      },
      {
        title: "Branches:",
        content:
          "A dual-view display of all company branches across various locations:",
        list: [
          "Branch Cards: Each branch is represented with a card, displaying the branch name, address, contact information, and an image.",
          "Interactive Map: An integrated map with customer markers showing each branch’s exact location. Customers can click on markers to see details for each branch, making it easy to find nearby locations.",
        ],
      },
      {
        title: "About Us:",
        list: [
          "This section presents the company’s story, mission, and values with a well-organized layout. Designed to reflect the brand identity, this page features team photos, an animated timeline of the company’s history, and a summary of achievements.",
        ],
      },
      {
        title: "Gallery:",
        list: [
          "A visually rich gallery page featuring high-quality images of the company's facilities, products, events, and achievements. The page uses a lightbox effect so users can view images in full screen, enhancing the browsing experience.",
        ],
      },
      {
        title: "Contact Us:",
        list: [
          "A contact page with a form to reach customer service or specific departments. The form includes fields for name, email, subject, and message, with backend validation to ensure smooth communication.",
          "Additional contact details (phone, email, and address) are prominently displayed.",
        ],
      },
      {
        title: "Carousel with Titles and Descriptions:",
        list: [
          "A beautifully designed carousel on a dedicated page to feature key products, testimonials, or services. Each slide in the carousel includes an image, title, and description, allowing users to learn about highlighted offerings in a visually engaging format.",
        ],
      },
      {
        title: "Additional Features",
        list: [
          "Responsive Design: The website is fully responsive and optimized for different devices, ensuring a seamless experience on mobile, tablet, and desktop.",
          "SEO Optimization: Implemented best practices for search engine optimization, including metadata, alt tags, and structured content, to improve online visibility.",
          "Performance Optimization: Fast loading times with optimized images, efficient code, and caching strategies to provide a smooth browsing experience for users.",
          "Analytics Integration: Added analytics tracking to monitor user behavior, page views, and other essential metrics for data-driven improvements.",
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
    title: "Bsit",
    alt: "bsit",
    name: "Mechanical Keyboard",
    description: [
      {
        title: "Project Overview",
        content:
          "I developed a sleek and engaging website for [Company Name], designed to establish a strong online presence and showcase the brand’s identity. Hosted on Vercel with a custom domain, the website provides an optimized user experience with responsive design, seamless navigation, and performance enhancements.",
      },
      {
        title: "Key Features and Pages",
        content: "Landing Page with Animation:",
        list: [
          "The website opens with an animated landing page to captivate visitors, reflecting the company’s energy and dedication. Smooth motion effects introduce the brand, with key elements and visuals that set the tone for the website.",
        ],
      },
      {
        content: "About Us:",
        list: [
          "This section shares the company’s story, values, and mission. The layout includes team photos, a timeline of achievements, and highlights of the brand's core values, giving users an insightful view of the company’s background and goals.",
        ],
      },
      {
        content: "Gallery:",
        list: [
          "A visually dynamic gallery page displays high-resolution images of the company’s products, events, and facilities. The gallery utilizes a lightbox effect to view images in full screen, providing an immersive visual experience.",
        ],
      },
      {
        content: "Contact Us:",
        list: [
          "The contact page includes a user-friendly form with fields for name, email, subject, and message, facilitating easy communication with the company. The form is secured with backend validation for a smooth user experience. Additional contact information (phone number, email, address) is prominently displayed to offer multiple ways for customers to connect.",
        ],
      },
      {
        title: "Additional Features",
        list: [
          "Responsive Design: The site is fully responsive, adapting seamlessly across mobile, tablet, and desktop devices for accessibility on any platform.",
          "SEO and Performance Optimization: The website is optimized for search engines with meta tags, structured data, and fast loading times to enhance visibility and user experience.",
          "Analytics Integration: Analytics tracking is included to monitor user engagement, page views, and other metrics for valuable insights and future improvements.",
        ],
      },
      {
        title: "Hosting and Deployment",
        list: [
          "Vercel Deployment: Hosted on Vercel, the website benefits from high-speed performance and uptime reliability. The deployment with a custom domain offers a professional and accessible online platform for the company’s clients and visitors.",
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
    title: "Rgav",
    alt: "Rgav",
    name: "Rgav",
    description: [
      {
        title: "Project Overview",
        content:
          "I developed a feature-rich e-commerce website for RGAV Ayurveda, carefully designed to provide users with an engaging and secure shopping experience for Ayurvedic products. After gathering requirements from the CEO and Ayurveda team, I implemented a variety of pages and functionalities to meet their needs.",
      },
      {
        title: "Key Features and Functionalities",
        content: "Home Page:",
        list: [
          "Infinite Carousel: A continuously scrolling carousel showcasing featured Ayurvedic products and promotions.",
          "Product Carousels: Dedicated sections for latest and popular products, each displayed in a user-friendly carousel format.",
          "Why Choose RGAV Ayurveda?: An informative section highlighting the company’s unique values and benefits, helping users understand the brand’s dedication to quality and tradition.",
        ],
      },
      {
        content: "About Us and Contact Us Pages:",
        list: [
          "About Us: A detailed overview of the company’s mission, history, and core values.",
          "Contact Us: A contact form and additional contact details, enabling users to reach out to the RGAV team directly.",
        ],
      },
      {
        content: "Product Listings and E-Commerce Functionality:",
        list: [
          "All Products Page: Displays the full range of RGAV products with interactive product cards featuring:",
          "Add to Cart: Allows users to add products to their cart with full CRUD operations for cart management.",
          "Add to Favorites: A wishlist functionality where users can save favorite items, also with CRUD capabilities.",
          "Buy Now: A quick-purchase option for instant checkout.",
          "Advanced Filters: Includes filtering options commonly found on e-commerce platforms, allowing users to sort by price, category, popularity, and other relevant criteria.",
        ],
      },
      {
        content: "Product Details Page:",
        list: [
          "Displays detailed information for individual products. If a user has purchased a product, they can leave a review and rate the product, adding valuable feedback for others.",
        ],
      },
      {
        content: "Authentication and Security:",
        list: [
          "Sign Up and Login Pages: Collect necessary information for secure account creation and login.",
          "High-Level Security: Utilizes access tokens for session management and stores refresh tokens securely in HTTP-only cookies to protect user data.",
        ],
      },
      {
        content: "Buy Page and Payment Integration:",
        list: [
          "A dedicated Buy page is in development, featuring payment integration to allow seamless transactions.",
        ],
      },
      {
        title: "Additional Features",
        list: [
          "Responsive Design: The site is fully optimized for various devices to provide a smooth experience across desktop, tablet, and mobile.",
          "Blog Page (Under Construction): A future content hub for Ayurvedic insights and company updates.",
        ],
      },
      {
        title: "Hosting and Deployment  ",
        list: [
          "Vercel Hosting: The frontend is hosted on Vercel with a custom domain, ensuring high performance, reliability, and an easy deployment pipeline for future updates.",
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
    title: "Rgav Admin",
    alt: "Rgav Admin",
    name: "Rgav Admin",
    mainImage:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      {
        title: "Project Overview",
        content:
          "I created a comprehensive admin panel for RGAV Ayurveda, designed to streamline backend management and provide insightful analytics for the team. Here’s an overview of the key features and functionalities:",
      },
      {
        title: "Admin Panel Features",
        content: "Dashboard:",
        list: [
          "Overview Cards: Displays four essential metrics:",
          "Latest User Count: Shows the number of recent users.",
          "Total Earnings (Current Month): Highlights revenue generated in the current month.",
          "Latest Order Count: Displays the most recent order count.",
          "Review Count: Indicates the number of recent product reviews.",
          "30-Day Revenue History: A set of three interactive graphs illustrating revenue trends over the past 30 days, plotted against dates to help analyze growth patterns.",
        ],
      },
      {
        content: "User Management:",
        list: [
          "User Page: A paginated table listing all users, with controls allowing admins to set the number of users displayed per page.",
          "User Details Page: Provides a detailed view of each user’s profile, including their personal information, purchase history, and submitted product reviews. This page enables admins to better understand user engagement and buying patterns.",
        ],
      },
      {
        content: "Order Management Page:",
        list: [
          "Full order management with details on each transaction, including order date, product details, payment status, and delivery status. Admins can track and update orders, making it easy to manage fulfillment and resolve issues quickly.",
        ],
      },
      {
        title: "Products Page:",
        content: "Full CRUD Functionality:",
        list: [
          "Create: Admins can add new products with fields for product name, description, pricing, categories, stock quantity, and images.",
          "Read: Displays a list of all products with key details, allowing easy reference and bulk updates.",
          "Update: Provides an editing interface to update product details, pricing, stock, or category assignments, ensuring accurate and up-to-date information.",
          "Delete: Enables deletion of obsolete or discontinued products, maintaining a clean product list.",
          "The CRUD functionality supports validation and image uploads, ensuring that product listings are complete and professional.",
        ],
      },

      {
        title: "Hosting and Domain:",
        list: [
          "Hosted on Vercel for high performance and reliability.",
          "Custom domain assigned for quick, professional access to the admin panel.",
        ],
      },
      {
        title: "Additional Features",
        list: [
          "Responsive Design: Optimized for access on various devices, allowing admins to manage the platform remotely.",
          "Data Security: Built-in data protection measures ensure that user information and transaction data remain secure.",
        ],
      },
    ],
    price: 149.99,
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Typescript", "Mui", "Axios", "Recharts"],
    link: "https://picsum.photos/seed/keyboard",
    github: "https://picsum.photos/seed/keyboard",
  },
  {
    id: 7,
    title: "react-base64-to-pdf",
    alt: "react-base64-to-pdf",
    name: "Mechanical Keyboard",
    description: [
      {
        title: "Package Overview",
        content:
          "I developed an npm package called react-base64-to-pdf to simplify handling Base64-encoded PDF files in React applications. This package was born from the need for a reliable, flexible PDF viewer that was missing in existing packages, making it easier to integrate PDF functionality directly into React projects.",
      },
      {
        content:
          "react-base64-to-pdf is a React component library designed for:",
        list: [
          "Displaying PDF Information: View file size, PDF version, creation date, and more.",
          "Previewing PDF Content: Render PDF content directly within the application for seamless in-app viewing.",
          "Downloading PDFs: Enable users to download PDF files with a single click.",
        ],
      },
      {
        title: "Components",
        content: "PDFInfo",
        list: [
          "Description: Displays core information about the PDF file, like its file size, version, creation and modification dates, and the creation tool.",
          "Props: base64 (string): The Base64-encoded PDF string.",
        ],
      },
      {
        content: "PDFPreview",
        list: [
          "Description: Renders a preview of the PDF file, allowing users to view the content directly in the app.",
        ],
      },
      {
        content: "Props:",
        list: [
          "base64 (string): The Base64-encoded PDF string.",
          "style (React.CSSProperties, optional): Allows custom styling for the preview.",
          "className (string, optional): Additional CSS class names for further styling.",
        ],
      },
      {
        content: "PDFDownloadButton",
      },
      {
        content:
          "Description: Provides a button to download the PDF, with customizable options for user-friendly downloading.",
      },
      {
        content: "Props:",
        list: [
          "base64 (string): The Base64-encoded PDF string.",
          "downloadFileName (string, optional): The name for the downloaded file; defaults to 'file.pdf' if not provided.",
          "style (React.CSSProperties, optional): Custom styles for the button.",
          "className (string, optional): Additional CSS class names.",
        ],
      },
      {
        content:
          "This package is ideal for any React application needing an efficient and user-friendly way to view, preview, and download PDF files, all from Base64 encoding.",
      },
    ],
    price: 149.99,
    mainImage:
      "https://images.unsplash.com/photo-1475598322381-f1b499717dda?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image: ["https://picsum.photos/seed/keyboard/400/300"],
    techstack: ["React", "Typescript", "Node.js"],
    link: "https://www.npmjs.com/package/react-base64-to-pdf",
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
