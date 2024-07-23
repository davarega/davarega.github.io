import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const NavBottom = () => {
	const [scroll, setScroll] = useState(false);

	if (typeof window !== "undefined") {
		window.onscroll = () => {
			setScroll(window.scrollY > 520);
		};
	}

	type navItem = {
		label: string;
		link?: string;
		children?: navItem[];
	}

	const navItems: navItem[] = [
		{
			label: 'Home',
			link: '/'
		},
		{
			label: 'Nasional',
			link: '/'
		},
		{
			label: 'Internasional',
			link: '/'
		},
		{
			label: 'Ekonomi',
			link: '/'
		},
		{
			label: 'Olahraga',
			link: '/'
		},
		{
			label: 'Lainnya',
			children: [
				{
					label: 'Teknologi',
					link: '/'
				},
				{
					label: 'Kesehatan',
					link: '/'
				},
				{
					label: 'Pendidikan',
					link: '/'
				},
				{
					label: 'Hiburan',
					link: '/'
				},
				{
					label: 'Lifestyle',
					link: '/'
				},
			]
		}
	]

	return (
		<div className={`${scroll ? "bg-gradient-to-r from-blue-base to-purple-base md:from-purple-mate md:via-blue-mate md:to-blue-dash" : ""} sticky z-[99] top-0 flex flex-col justify-between`}>
			{/* Navbar bawah */}
			<div className="hidden md:flex w-full bottom-0">
				<div className="container h-20 mx-auto px-4">
					<ul className="hidden md:flex gap-x-6 text-white flex justify-between items-center h-full">
						{/* Load Navbar dari data */}
						{navItems.map((item, index) => (
							<li key={index} className="group h-full">
								<Link href={item.link ?? "#"} className="h-full flex items-center">
									<p className="flex gap-2">
										<span>{item.label}</span>
										{item.children && <FaAngleDown className="text-xl group-hover:rotate-180 transition-all" />}
									</p>
								</Link>
								{/* Load dropdown jika ada */}
								{item.children && (
									<div className="absolute -mt-5 text-black transition duration-300 rounded-xl hidden group-hover:flex w-auto flex-col gap-4 transition-all bg-white py-3 px-4">
										{item.children.map((child, index) => (
											<Link key={index} href={child.link ?? "#"}>
												<p>{child.label}</p>
											</Link>
										))}
									</div>
								)}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default NavBottom;
