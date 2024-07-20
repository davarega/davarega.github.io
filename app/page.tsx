import React from "react";
import Image from "next/image";

type newsItem = {
	title?: string;
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

const recentNews: newsItem[] = [
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		category: "Olahraga",
		image: "/images/temp.jpg"
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		category: "Olahraga",
		image: "/images/temp.jpg"
	},
	{
		title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, minima nulla? Saepe, impedit odio? Ipsam quaerat maxime ipsa perferendis est.",
		category: "Olahraga",
		image: "/images/temp.jpg"
	}
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
		<div>
			{/* Section 1 */}
			<div id="1" className="bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash flex justify-center items-center">
				<div className="container px-4 mx-auto flex gap-10 py-20">
					{/* Berita besar */}
					<Image
						src="/images/temp.jpg"
						alt="Asep News"
						className="rounded-2xl"
						width={1080}
						height={0}
					/>
					{/* Berita kecil */}
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
			{/* Section 2 */}
			<div id="2" className="bg-white text-black">
				<div className="container px-4 mx-auto gap-10 py-10 bg-red-100">
					<div>
						<h1 className="text-2xl font-poppins font-semibold">TERBARU</h1>
						<hr className="w-20 h-1 my-1 bg-red-800 border-0 rounded" />
					</div>
					<div className="flex">
						{/* List berita terbaru */}
						<div className="flex flex-col gap-5 py-10 bg-yellow-100">
							{/* Load berita */}
							{recentNews.map((item, index) => (
								<div className="flex gap-4">
									<Image
										src={item.image ?? "/images/temp.jpg"}
										alt={item.title?.slice(0, 10) ?? index.toString()}
										className="rounded-2xl"
										width={400}
										height={0}
									/>
									<div>
										<p className="">{item.title}</p>
										<p className="pt-2">{item.category}</p>
									</div>
								</div>
							))}
						</div>
						{/* List leaderboard */}
						<div className="bg-blue-100">
							<div className="flex flex-col px-8 text-white bg-gradient-to-b from-purple-mate via-blue-mate to-blue-dash">
								<h1 className="px-12 pt-5 pb-3 font-poppins font-bold text-2xl">LEADERBOARD</h1>
								<div className="mx-5 pb-8">
									{/* List leaderboard 1 - 3 */}
									{leaderboardTop.map((item, index) => (
										<div className={`flex gap-2 font-poppins font-semibold ${item.classname}`}>
											{item.pos && (
												<Image
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
			</div>
			{/* Section 3 */}
			<div id="3" className="bg-white text-black">
				<div className="container px-4 mx-auto py-10 flex flex-col items-center">
					<h1 className="text-2xl font-poppins font-semibold">
						REKOMENDASI UNTUK ANDA
						<hr className="w-48 h-1 left-0 relative my-1 bg-red-800 border-0 rounded" />
					</h1>
					<div className="grid grid-cols-3 gap-8">
						<div className="max-w-md max-h-96">
							<Image
								src="/images/temp.jpg"
								alt="Asep News"
								width={500}
								height={0}
							/>
							<p className="rounded-full bg-purple-500 w-fit my-3 px-5 py-1 text-white">Politik</p>
							<p className="line-clamp-2 font-poppins font-medium text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed tempora tenetur aperiam placeat voluptatum odit iste perspiciatis minus nesciunt recusandae!</p>
							<p className="text-gray-400">DD/MM/YYYY</p>
						</div>
						<Image
							src="/images/temp.jpg"
							alt="Asep News"
							width={448}
							height={0}
						/>
						<Image
							src="/images/temp.jpg"
							alt="Asep News"
							width={448}
							height={0}
						/>
						<Image
							src="/images/temp.jpg"
							alt="Asep News"
							width={448}
							height={0}
						/>
						<Image
							src="/images/temp.jpg"
							alt="Asep News"
							width={400}
							height={0}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
