import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Image from "next/image";
import PreloaderWrapper from "@/components/preloaderWrapper";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Career Pilot",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`element ${inter.className}`}>
          {/* Wrap Everything Inside PreloaderWrapper */}
          <PreloaderWrapper>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />

              <footer className="bg-muted/50 py-8">
                <div className="container mx-auto px-4 text-center text-gray-200">
                  <p className="text-lg font-semibold">Contact Us</p>
                  <p>
                    Email:
                    <a href="mailto:yashgupta6793@gmail.com" className="text-blue-400 hover:underline ml-1">
                      yashgupta6793@gmail.com
                    </a>{" "}
                    |
                    <a href="mailto:supriyadhongade5@gmail.com" className="text-blue-400 hover:underline ml-1">
                      supriyadhongade5@gmail.com
                    </a>
                  </p>

                  <p className="text-sm text-gray-400 mt-4">
                    &copy; {new Date().getFullYear()} Career Pilot - AI Career Coach. All rights reserved.
                  </p>
                </div>
              </footer>
            </ThemeProvider>
          </PreloaderWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
