import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div
        id="1"
        className="bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash flex justify-center items-center"
      >
        <div className="container px-4 mx-auto flex gap-10 py-20">
          <Image
            src="/images/temp.jpg"
            alt="Asep News"
            className="rounded-2xl"
            width={1080}
            height={0}
          />
          <div className="flex flex-col justify-between">
            <Image
              src="/images/temp.jpg"
              alt="Asep News"
              className="rounded-2xl"
              width={500}
              height={0}
            />
            <Image
              src="/images/temp.jpg"
              alt="Asep News"
              className="rounded-2xl"
              width={500}
              height={0}
            />
          </div>
        </div>
      </div>
      <div id="2" className="bg-white text-black">
        <div className="container px-4 mx-auto flex gap-10 py-20 bg-red-100">
          <h1>Hello World!</h1>
        </div>
      </div>
    </div>
  );
}
