import React from "react";
import "../../index.css";

type Props = {
	color: string;
	genre: string;
	id: number;
};

const Pill: React.FC<Props> = (props: Props) => {
	const { genre, color, id } = props;
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<>
			<p
				className={`m-3 duration-200 scale-100 hover:scale-125 text-white px-4 mx-1 w-auto rounded-xl shadow-md inline-block hover:bg-${color}-400 bg-${color}-300`}
			>
			<a href={`/genre/${id}`}>
				{genre}
				</a>
			</p>
		</>
	);
};

export default Pill;
