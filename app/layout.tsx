import "@/app/globals.css";
import { Navbar } from "@/lib/components/Navbar";
import { Footer } from "@/lib/components/Footer";
import { ScrollPercentageTracker } from "@/lib/effects/ScrollPercentageTracker";
import { fonts } from "@/foundation/fonts";
import { metadata as meta } from "@/foundation/metadata";

export const metadata = meta

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${fonts}
        lg:bg-fixed
        `}
        style={{
          backgroundColor: '#ffffff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23bae6fd' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        <ScrollPercentageTracker className="flex flex-col min-h-screen justify-between">
          <div className="flex flex-col">
            <Navbar />
            {children}
          </div>
          <Footer />
        </ScrollPercentageTracker>
      </body>
    </html>
  );
}
