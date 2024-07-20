import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash flex justify-center">
      <div className="container px-4 mx-auto">
        {/* <h1 className="justify-center h-[calc(100vh-5rem)] items-center flex text-2xl">WELCOME TO ASEP NEWS !</h1> */}
        {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eveniet fugit, corporis totam ipsum enim laudantium est adipisci incidunt nemo culpa tenetur aliquid iusto, aliquam nulla nisi nesciunt ipsam numquam maxime quos voluptates magnam alias! Repudiandae labore placeat at. Neque dolorum laudantium labore asperiores iusto nesciunt quae excepturi unde quam iste eveniet odit reprehenderit molestias deserunt esse, qui voluptates. Odit qui aut iusto vitae accusamus, repellendus possimus cupiditate soluta inventore doloremque odio ipsa, saepe ullam error minima, velit reprehenderit in? Ad consequuntur quis maiores cupiditate laboriosam illum rerum aspernatur, reiciendis ipsam sunt. Dolores accusamus cupiditate minima! Illo incidunt nihil modi.</p> */}
        <div className="flex gap-4 pt-20">
          <Image src="/images/temp.jpg" alt="Asep News" width={1149} height={0} />
          <div className="flex flex-col justify-between">
            <Image src="/images/temp.jpg" alt="Asep News" width={500} height={500} />
            <Image src="/images/temp.jpg" alt="Asep News" width={500} height={500} />
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque eveniet fugit, corporis totam ipsum enim laudantium est adipisci incidunt nemo culpa tenetur aliquid iusto, aliquam nulla nisi nesciunt ipsam numquam maxime quos voluptates magnam alias! Repudiandae labore placeat at. Neque dolorum laudantium labore asperiores iusto nesciunt quae excepturi unde quam iste eveniet odit reprehenderit molestias deserunt esse, qui voluptates. Odit qui aut iusto vitae accusamus, repellendus possimus cupiditate soluta inventore doloremque odio ipsa, saepe ullam error minima, velit reprehenderit in? Ad consequuntur quis maiores cupiditate laboriosam illum rerum aspernatur, reiciendis ipsam sunt. Dolores accusamus cupiditate minima! Illo incidunt nihil modi.</p>
      </div>
    </div>
  );
}