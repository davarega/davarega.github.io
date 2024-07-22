import React from "react";
import Image from "next/image";

type newsItem = {
	title?: string;
	link: string;
	category?: string;
	image?: string;
	date?: string;
}

type leaderboardItem = {
	pos?: string;
	name: string;
	classname?: string;
	score?: number;
}

const topNews: newsItem[] = [
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg"
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg"
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg"
	}
]

const recentNews: newsItem[] = [
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg"
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg"
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg"
	}
]

const recomendNews: newsItem[] = [
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg",
		date: "DD/MM/YYYY",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg",
		date: "DD/MM/YYYY",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg",
		date: "DD/MM/YYYY",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg",
		date: "DD/MM/YYYY",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg",
		date: "DD/MM/YYYY",
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		link: "/",
		category: "Olahraga",
		image: "/images/temp.jpg",
		date: "DD/MM/YYYY",
	},
]

const leaderboardTop: leaderboardItem[] = [
	{ pos: "/images/temp.jpg", name: "Reza", classname: "text-2xl" },
	{ pos: "/images/temp.jpg", name: "Reza", classname: "text-xl" },
	{ pos: "/images/temp.jpg", name: "Reza", classname: "text-lg" }
]

const leaderboard: leaderboardItem[] = [
	{ pos: "4.", name: "Reza" },
	{ pos: "5.", name: "Reza" },
	{ pos: "6.", name: "Reza" },
	{ pos: "7.", name: "Reza" },
	{ pos: "8.", name: "Reza" },
	{ pos: "9.", name: "Reza" },
	{ pos: "10.", name: "Reza" },
]

export default function Home() {
	return (
		<div className="bg-white font-poppins">
			{/* Section 1 */}
			<div id="1" className="bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash flex justify-center items-center">
				{/* Load top berita */}
				<div className="container px-4 py-10 mx-auto grid col-span-full md:grid-cols-3 gap-5">
					{/* Berita besar */}
					<div className="group col-span-2 h-full relative">
						<Image
							priority={false}
							src={topNews[0].image ?? "/images/temp.jpg"}
							alt={topNews[0].title?.slice(0, 10) ?? "Top News 1"}
							className="rounded-2xl h-full"
							width={1080}
							height={0}
						/>
						<div className="absolute flex items-end rounded-2xl h-full bottom-0 bg-black-rgba">
							<p className="line-clamp-2 font-medium text-xl md:text-2xl m-4">{topNews[0].title}</p>
						</div>
					</div>
					<div className="grid col-span-2 md:col-span-1 gap-5">
						<div className="group relative">
							<Image
								priority={false}
								src={topNews[1].image ?? "/images/temp.jpg"}
								alt={topNews[1].title?.slice(0, 10) ?? "Top News 1"}
								className="rounded-2xl w-full"
								width={500}
								height={0}
							/>
							<div className="absolute flex items-end rounded-2xl h-full bottom-0 bg-black-rgba">
								<p className="line-clamp-2 font-medium text-xl m-4">{topNews[1].title}</p>
							</div>
						</div>
						<div className="group relative">
							<Image
								priority={false}
								src={topNews[2].image ?? "/images/temp.jpg"}
								alt={topNews[2].title?.slice(0, 10) ?? "Top News 1"}
								className="rounded-2xl w-full"
								width={500}
								height={0}
							/>
							<div className="absolute flex items-end rounded-2xl h-full bottom-0 bg-black-rgba">
								<p className="line-clamp-2 font-medium text-xl m-4">{topNews[2].title}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Section 2 */}
			<div id="2" className="text-black">
				<div className="container mx-auto grid gap-10 px-4 md:px-0 md:grid-cols-12 py-10">
					<div className="col-span-full">
						<h1 className="text-2xl font-semibold">TERBARU</h1>
						<hr className="w-20 h-1 my-1 bg-red-800 border-0 rounded" />
					</div>
					<div className="col-span-full col-span-9 lg:col-span-8">
						{/* List berita terbaru */}
						<div className="flex flex-col gap-5">
							{/* Load berita */}
							{recentNews.map((item, index) => (
								<div className="flex flex-col md:flex-row gap-4">
									<Image
										priority={false}
										src={item.image ?? "/images/temp.jpg"}
										alt={item.title?.slice(0, 10) ?? index.toString()}
										className="rounded-2xl w-full md:w-1/3"
										width={400}
										height={0}
									/>
									<div>
										<p className="line-clamp-2 text-lg md:text-normal">{item.title}</p>
										<p className="pt-2">{item.category}</p>
									</div>
								</div>
							))}
						</div>
						{/* List leaderboard */}
					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<div className="flex flex-col px-8 text-white bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash">
							<h1 className="px-12 pt-5 pb-3 font-bold text-2xl">LEADERBOARD</h1>
							<div className="mx-5 pb-8">
								{/* List leaderboard 1 - 3 */}
								{leaderboardTop.map((item, index) => (
									<div className={`flex gap-2 font-semibold ${item.classname}`}>
										{item.pos && (
											<Image
												priority={false}
												src={item.pos}
												alt={index.toString()}
												width={20}
												height={20}
											/>
										)}
										<p>{item.name}</p>
										<p>{item.score}</p>
									</div>
								))}
								{/* List leaderboard 4 - 10 */}
								{leaderboard.map((item, index) => (
									<div className="flex gap-2">
										<p>{item.pos}</p>
										<p>{item.name}</p>
										<p>{item.score}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Section 3 */}
			<div id="3" className="text-black">
				<div className="container mx-auto py-10 flex flex-col items-center gap-20">
					<h1 className="text-2xl font-semibold">
						REKOMENDASI UNTUK ANDA
						<hr className="w-48 h-1 left-0 my-1 bg-red-800 border-0 rounded" />
					</h1>
					<div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
						{/* Load berita */}
						{recomendNews.map((item, index) => (
							<div className="max-w-md max-h-96">
								<Image
									priority={false}
									src={item.image ?? "/images/temp.jpg"}
									alt={item.title?.slice(0, 10) ?? index.toString()}
									width={500}
									height={0}
								/>
								<p className="rounded-full bg-purple-500 w-fit my-3 px-5 py-1 text-white">{item.category}</p>
								<p className="line-clamp-2 font-medium text-xl">{item.title}</p>
								<p className="text-gray-400">{item.date}</p>
							</div>
						))}
					</div>
					<button className="rounded-full outline-purple-base outline px-6 py-2">
						<p className=" font-semibold text-xl text-purple-base">Read More</p>
					</button>
				</div>
			</div>
		</div>
	);
}
