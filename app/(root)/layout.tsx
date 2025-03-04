import Navigation from "../components/navigation/navHero";
import Footer from "../components/footer";
import "../globals.css";
import { Inter, Poppins, Quintessential } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const quintessential = Quintessential({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-quintessential"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${quintessential.variable} text-white bg-gradient-to-r from-blue-base to-purple-base md:from-purple-mate md:via-blue-mate md:to-blue-dash`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}