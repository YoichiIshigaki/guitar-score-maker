import React from "react";
import {Pill,TitleText,DescriptionText} from '../molecule/'
import "../../App.css";
import "../../index.css";


type PillProps = {
	color: string;
	genre: string;
	id: number;
};

const Card: React.FC = () => {

	const genreData : PillProps[] = [
		{id:1,genre:"#expert",color:"green"},
		{id:2,genre:"#anime song",color:"blue"},
		{id:3,genre:"#heavy metal",color:"gray"},
		{id:4,genre:"#female band",color:"pink"},
	]
	return (
		<>
			<div className="group my-16 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<img
							className="filter grayscale-[80%] group-hover:filter-none transition-all duration-100 h-auto w-full md:object-cover md:w-64 md:h-64"
							src="https://img01.boo-log.com/usr/z/z/1/zz1100/10.jpg"
							alt="Lovebites"
						/>
					</div>
					<div className="p-4">
						<TitleText title={"lovebites"}/>
						<p
							className="block mt-0.5 text-lg leading-tight font-medium text-black hover:underline"
						>
							Holy War
						</p>
						<div>
							<DescriptionText title={"Lovebites (stylized as LOVEBITES) is a Japanese all-female heavy metal band, formed in 2016 by former Destrose members Miho and Haruna. Its lineup currently consists of Haruna on drums, Midori and Miyako on guitar, and Asami on vocals. After signing to Victor Entertainment, the group released both their debut EP and their first album, The Lovebites EP and Awakening from Abyss, in 2017 before performing their first overseas concerts at the end of the year. "}/>
							{
								genreData.map((data) => {
									return (<Pill key={data.id} id={data.id} genre={data.genre} color={data.color} />)							})
							}
						</div>
						<div className="h-5">
							<span
								className="mt-4 w-4 h-4 hover:scale-125 duration-150 block bg-like-button bg-no-repeat bg-contain"
							></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
