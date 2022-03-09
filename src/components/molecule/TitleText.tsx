import React from "react";
import "../../index.css";

type Props = {
	title: string;
};
const TitleText: React.FC<Props> = (props: Props) => {
	const { title } = props;
	return (
		<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
			{title}
		</div>
	);
};

export default TitleText;
