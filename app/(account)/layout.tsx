import "../globals.css";
import Navbar from "../components/navigation/navbar"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${quintessential.variable} bg-no-repeat bg-cover`} style={{ backgroundImage: "url('/images/background.png')" }}>
        <div className="flex flex-col h-screen container mx-auto text-black">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}