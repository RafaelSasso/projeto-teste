import Header from "../components/header";
import banner from "../assets/silksong-banner.jpg";

function GamePage() {
    return <>
        <div className="w-full flex align-items-center justify-center">
            <div
                className="w-[80vw] h-[50vh] flex align-items-center justify-center"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Header />
            </div>
        </div>
        <div className="flex-col">
            <div className=" h-full flex-col">
                <div>
                    <h1>Filters</h1>
                    <div>

                    </div>
                </div>
                <div>
                            
                </div>
            </div>
        </div>
    </>
}

export default GamePage;