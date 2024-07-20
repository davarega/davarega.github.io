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
        <div className="container px-4 mx-auto gap-10 py-10 bg-red-100">
          <div>
            <h1 className="text-2xl font-poppins font-semibold">TERBARU</h1>
            <hr className="w-20 h-1 my-1 bg-red-800 border-0 rounded" />
          </div>
          <div className="flex">
            <div className="flex flex-col gap-5 py-10 bg-yellow-100">
              <div className="flex gap-4">
                <Image
                  src="/images/temp.jpg"
                  alt="Asep News"
                  className="rounded-2xl"
                  width={400}
                  height={0}
                />
                <div className="">
                  <h1 className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat
                    maxime ipsa perferendis est.
                  </h1>
                  <p className="pt-2">Olahraga</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/temp.jpg"
                  alt="Asep News"
                  className="rounded-2xl"
                  width={400}
                  height={0}
                />
                <div className="">
                  <h1 className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat
                    maxime ipsa perferendis est.
                  </h1>
                  <p className="pt-2">Olahraga</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Image
                  src="/images/temp.jpg"
                  alt="Asep News"
                  className="rounded-2xl"
                  width={400}
                  height={0}
                />
                <div className="">
                  <h1 className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat
                    maxime ipsa perferendis est.
                  </h1>
                  <p className="pt-2">Olahraga</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-100">
              <div className="px-10 py-5 text-white bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash">
                <h1>LEADERBOARD</h1>
                <div>
                  <h1>1. Lorem ipsum dolor sit amet.</h1>
                  <h1>2. Lorem ipsum dolor sit amet.</h1>
                  <h1>3. Lorem ipsum dolor sit amet.</h1>
                  <h1>4. Lorem ipsum dolor sit amet.</h1>
                  <h1>5. Lorem ipsum dolor sit amet.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
