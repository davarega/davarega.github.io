"use client";
import { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import NavTop from "./navbar/navTop";

const Navigation = () => {
	// toggle sidebar
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<NavTop toggle={toggle} />
		</>
	);
};

export default Navigation;