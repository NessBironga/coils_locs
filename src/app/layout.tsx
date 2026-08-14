import type { Metadata } from "next";
import "./globals.css";

// TODO: swap in the real brand name once naming is finalized — this
// scaffold intentionally avoids inventing one.
export const metadata: Metadata = {
  title: "4C Hair & Locs — Practical Care, Kenyan Roots",
  description:
    "Practical care guides and carefully chosen tools for 4C hair and locs — Kenyan roots, global community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
