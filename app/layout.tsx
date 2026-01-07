// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Best Hospitals in New York 2025",
  description: "A data-backed ranking of New York’s best hospitals for 2025. Compare by specialty, outcomes, and patient experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* SEO meta tags */}
        <meta name="keywords" content="New York hospitals, 2025 rankings, cardiology, oncology, orthopedics" />
        <meta name="author" content="Rajesh" />
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Top 10 Best Hospitals in New York — 2025",
            "itemListOrder": "Ascending",
            "numberOfItems": 10,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "NYU Langone Hospitals", "url": "https://nyulangone.org" },
              { "@type": "ListItem", "position": 2, "name": "New York-Presbyterian Hospital – Columbia & Cornell", "url": "https://www.nyp.org" }
            ]
          })
        }} />
      </head>
      <body>
        {/* Common header */}
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">Hospital Rankings Portal</h1>
        </header>

        {/* Page content */}
        <main>{children}</main>

        {/* Common footer */}
        <footer className="p-4 bg-gray-100 text-center text-sm">
          © 2025 Rajesh Media Portal
        </footer>
      </body>
    </html>
  );
}
