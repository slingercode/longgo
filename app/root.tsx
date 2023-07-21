import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { Dropdown } from "~/components/dropdown";
import { ThemeProvider } from "~/lib/theme-provider";

import stylesheet from "~/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="dark:bg-neutral-950 dark:text-white">
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          <div className="invisible absolute right-0 top-0 m-2 md:visible">
            <Dropdown />
          </div>

          <Outlet />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
