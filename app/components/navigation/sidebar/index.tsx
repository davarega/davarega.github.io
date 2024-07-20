import { FaX, FaSistrix } from "react-icons/fa6";
import Link from "next/link";

const Sidebar = ({
	isOpen,
	toggle,
}: {
	isOpen: boolean;
	toggle: () => void;
}): JSX.Element => {
	return (
		<div className="md:hidden">
			<div
				className="sidebar-container fixed w-full h-full overflow-hidden justify-center left-0 z-[10] text-white"
				style={{
					opacity: `${isOpen ? "1" : "0"}`,
					top: ` ${isOpen ? "0" : "-100%"}`,
				}}
			>
				<div className="container mx-auto px-4 h-20 bg-gradient-to-r from-blue-base to-purple-base">
					<div className="flex justify-between items-center h-full">
						<Link href="/">
							<p className="font-bold text-4xl">Logo</p>
						</Link>
						<button className="inline-flex items-center" onClick={toggle}>
							{/* Close icon */}
							<FaX />
						</button>
					</div>
				</div>
				<div className="bg-gradient-to-t from-purple-base to-blue-base h-full">
					<ul className="flex gap-x-6 items-center">
						<li>
							<Link href="/signin" onClick={toggle}>
								<p>masuk</p>
							</Link>
						</li>
						<li>
							<Link href="/signup" onClick={toggle}>
								<p>daftar</p>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;