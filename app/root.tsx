import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import "./tailwind.css";
import { useState } from "react";
import FloatingDockDemo from "./components/FloatingDockDemo";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({
  children,
  isIntroDone,
}: {
  children: React.ReactNode;
  isIntroDone: boolean;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* {isIntroDone && <Navbar isIntroDone={isIntroDone} />}
         */}

        {children}
        {isIntroDone && <FloatingDockDemo isIntroDone={isIntroDone} />}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isIntroDone, setIsIntroDone] = useState(true);
  return (
    <Layout isIntroDone={isIntroDone}>
      <Outlet context={{ isIntroDone, setIsIntroDone }} />
    </Layout>
  );
}
