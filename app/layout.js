import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`element ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-8">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p className="text-lg font-semibold">Contact Us</p>
                <p>Email:
                  <a href="mailto:yashgupta6793@gmail.com" className="text-blue-400 hover:underline ml-1">yashgupta6793@gmail.com</a> |
                  <a href="mailto:supriyadhongade5@gmail.com" className="text-blue-400 hover:underline ml-1">supriyadhongade5@gmail.com</a>
                </p>

                {/* <div className="flex justify-center gap-6 mt-4">
                  <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-75" />
                  </a>
                  <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-75" />
                  </a>
                  <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-75" />
                  </a>
                </div> */}

                <p className="text-sm text-gray-400 mt-4">
                  &copy; {new Date().getFullYear()} Career Pilot - AI Career Coach. All rights reserved.
                </p>
              </div>
            </footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
