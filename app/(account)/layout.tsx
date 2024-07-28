import "../globals.css";
import Navbar from "../components/navigation/navbar";
import { Inter, Poppins, Quintessential } from "next/font/google";
import Image from "next/image";
import { authBackground, authImage } from "../components/loadimages";

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
      <body className={`${inter.className} ${poppins.variable} ${quintessential.variable} flex flex-col h-screen mx-auto text-black bg-no-repeat bg-cover`} style={{ backgroundImage: `url(${authBackground})` }}>
        <Navbar />
        <div className="h-full">
          <div className="container sm:flex items-center justify-between h-full">
            <div className="m-2  mt-5  md:mx-auto md:my-0 lg:mx-16 ">
              <Image height={350} width={350} src={authImage} alt="gambar" className="rounded-[100px] md:w-[400px] md:h-[400px] object-cover mx-6" />
            </div>
            <div className="flex-shrink-0 mx-2.5 md:mx-auto lg:mx-16">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}