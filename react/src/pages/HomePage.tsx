import Header from "../components/header";
import banner from "../assets/silksong-banner.jpg";

function HomePage() {
	return (
		<>
			<Header />
			<div className="w-full h-56 flex justify-center items-center">
            	<img src={banner} alt="Game Banner" className="w-2/3 h-full object-fill" />
        	</div>
		</>
	);
}

export default HomePage;