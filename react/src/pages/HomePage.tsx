import Header from "../components/header";
import ssBanner from "../assets/silksong-banner.jpg";
import { Link } from "react-router-dom";
import ragnarok from "../assets/ragnarok.jpg";
import little from "../assets/littleNightmares.jpg";
import silksong from "../assets/silksong.jpeg";
import tekken from "../assets/tekken.jpg";



function HomePage() {
	return (
		<>
			<div className="min-h-screen text-[var(--text-color)]">
				<Header />
				<div className="w-full p-5 flex flex-col gap-20 justify-center items-center">
					<div className="w-3/4 h-80 md:h-[480px] p-5 flex gap-7 ">
						<div className="flex-1 h-full flex justify-center items-center">
							<img src={ssBanner} alt="Game Banner" className="w-full h-full rounded-2xl" />
						</div>
						<ul className="w-1/4 h-full flex flex-col gap-2 list-none p-0 m-0 text-[var(--text-color)]">
							{[{img: silksong, label: 'Silksong'}, {img: ragnarok, label: 'God of War: Ragnarok'}, {img: tekken, label: 'Tekken'}, {img: little, label: 'Little Nightmares'}, {img: little, label: 'Little Nightmares'}].map((item, idx) => (
								<li key={idx} className="flex-1 w-full min-h-0 overflow-hidden">
									<Link to="/" className="pl-8 flex items-center h-full gap-3 p-2 hover:bg-[var(--hover-color)] justify-center rounded-lg transition-ease-in-out duration-300">
										<img src={item.img} alt={item.label} className="w-1/5 h-4/5 object-contain rounded-xl" />
										<div className="flex-1">
											<span className="text-md font-medium">{item.label}</span>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className=" w-full">
						<div>
	
							<div className="p-10 w-full">
								<h1 className="text-3xl">Jogos em Promoção</h1>
							</div>
						</div>
						

						
					</div>
				</div>
			</div>
		</>
	);
}

export default HomePage;