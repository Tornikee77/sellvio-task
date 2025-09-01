import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/features/query/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business & Creator Connect",
  description:
    "პლატფორმა, სადაც ბიზნესები და შემოქმედები ერთმანეთს პოულობენ. ორივეს შეუძლია პოსტის შექმნა და კონტაქტის დამყარება.",
  openGraph: {
    title: "Business & Creator Connect",
    description:
      "პლატფორმა, სადაც ბიზნესები და შემოქმედები ერთმანეთს პოულობენ. ორივეს შეუძლია პოსტის შექმნა და კონტაქტის დამყარება.",
    siteName: "Business & Creator Connect",
    locale: "ka_GE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business & Creator Connect",
    description:
      "პლატფორმა, სადაც ბიზნესები და შემოქმედები ერთმანეთს პოულობენ. ორივეს შეუძლია პოსტის შექმნა და კონტაქტის დამყარება.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
