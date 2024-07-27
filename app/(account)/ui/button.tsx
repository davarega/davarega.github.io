const Button = ({title=""}) => {
	return (
		<div className="mt-5">
			<button className="py-1 pl-3 w-full shadow text-center bg-gradient-to-r from-[#274B74] to-[#8233C5] text-white rounded-full font-bold">{title}</button>
		</div>
	)
}

export default Button;