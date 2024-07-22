import { FaX, FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = ({
	isOpen,
	toggle,
}: {
	isOpen: boolean;
	toggle: () => void;
}): JSX.Element => {

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
		<div className="md:hidden font-poppins">
			<div
				className="fixed w-full h-full overflow-hidden justify-center left-0 z-[100] text-white"
				style={{
					opacity: `${isOpen ? "1" : "0"}`,
					top: ` ${isOpen ? "0" : "-100%"}`,
				}}
			>
				<div className="container mx-auto px-4 h-20 bg-gradient-to-r from-blue-base to-purple-base">
					<div className="flex justify-between items-center h-full">
						<Link href="/">
							<p className="font-bold text-4xl">LOGO</p>
						</Link>
						<button aria-label="navbar button" className="inline-flex items-center" onClick={toggle}>
							<FaX />
						</button>
					</div>
				</div>
				<div className="bg-gradient-to-t from-purple-base to-blue-base h-full">
					<div className="h-fit">
						<ul className="flex p-10 justify-between">
							<li className="outline rounded-xl outline-white">
								<Link href="/signin" onClick={toggle}>
									<p className="px-8 py-2">masuk</p>
								</Link>
							</li>
							<li className="outline rounded-xl outline-white">
								<Link href="/signin" onClick={toggle}>
									<p className="px-8 py-2">masuk</p>
								</Link>
							</li>
						</ul>
					</div>
					<hr />
					<div className="h-full my-4">
						<ul className=" gap-x-6 text-white flex flex-col justify-between items-center w-full">
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
		</div>
	);
};

export default Sidebar;