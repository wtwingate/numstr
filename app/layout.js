import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "numstr",
  description: "It rhymes with dumpster!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plexSans.className} antialiased bg-stone-200`}>
        {children}
      </body>
    </html>
  );
}
