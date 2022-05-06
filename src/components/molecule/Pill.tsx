import React from "react";
import "../../index.css";
import {Link} from "react-router-dom"
type Props = {
	color: string;
	genre_name: string;
	genre_id: number;
};

const Pill: React.FC<Props> = (props: Props) => {
	const { genre_name, genre_id, color } = props;
	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<>
			<span
				className={`
					m-3 duration-200 scale-100 hover:scale-125
					text-white px-4 mx-1 w-auto rounded-xl
					shadow-md inline-block
					hover:bg-${color}-400 bg-${color}-300
				`}
			>
				<Link to={`/genre/${genre_id}`}>
					#{genre_name}
				</Link>
			</span>
		</>
	);
};

export default Pill;
