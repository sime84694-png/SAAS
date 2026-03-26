import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leggiero – Tvoj godišnji usred dana",
  description:
    "Pobjegni od svakodnevnog stresa. Uživaj u savršenoj Lavazza kavi, svježim sokovima i premium Torterie Macaron slasticama u ugodnom ambijentu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
