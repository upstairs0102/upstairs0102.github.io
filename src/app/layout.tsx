import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "ADAM YOU — Engineer & Observer",
    template: "%s · Adam You",
  },
  description:
    "Adam You — Senior Software Engineer, Shutterbug, Cycling Lover.",
  icons: { icon: "/favicon.svg" },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <a className="skip" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
