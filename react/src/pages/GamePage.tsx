import Header from "../components/header";
import GameCard from "../components/gameCard";

// Example local array (currently used)
const array = [
    { id: 1, title: "Silksong", price: 19.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 2, title: "Elden Ring", price: 29.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 3, title: "Game 3", price: 39.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 4, title: "Game 4", price: 49.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 5, title: "Game 5", price: 59.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 6, title: "Game 6", price: 69.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 7, title: "Game 7", price: 79.99, imageUrl: "../assets/silksong-banner.jpg" },
    { id: 8, title: "Game 8", price: 89.99, imageUrl: "../assets/silksong-banner.jpg" },
];

function GamePage() {
    return <>
         <div className="">
            <Header />
        </div>
        <div className="flex">
            <div className=" h-full w-full flex">
                <div className="w-1/4 flex">
                    <div className="w-full bg-[var(--semi-white)] p-4">
                        <h1>Filters</h1>
                    </div>
                </div>
                <div className="w-3/4 h-full flex flex-wrap overflow-y-auto p-4">
                    { /* Current: render from local array */ }
                    {array.map(element => {
                        const src = typeof element.imageUrl === 'string' && !element.imageUrl.startsWith('http')
                            ? new URL(element.imageUrl, import.meta.url).href
                            : element.imageUrl;
                        return (
                            <GameCard
                                key={element.id}
                                title={element.title}
                                price={element.price}
                                imageUrl={src}
                            />
                        );
                    })}

                    { /* Example (commented) render when you fetch from the API:
                    {games.map(element => (
                        <GameCard key={element.id} title={element.title} price={element.price} imageUrl={element.imageUrl} />
                    ))}
                    */ }
                </div>
            </div>
        </div>
    </>
}

export default GamePage;