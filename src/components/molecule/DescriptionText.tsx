import React from "react";
import "../../index.css";

type Props = {
	text: string;
};

const DescriptionText: React.FC<Props> = (props: Props) => {
	const { text } = props;
	/* 全角44文字(半角88文字)以上入れてはいけない。 */
	const omittedTitle = text.slice(0, 44) + " ... ";
	return (
		<div className="h-16">
			<p className="mt-2 text-gray-500">{omittedTitle}</p>
		</div>
	);
};

export default DescriptionText;
