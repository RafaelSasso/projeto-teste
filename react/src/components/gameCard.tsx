interface GameCardProps {
    title: string;
    price: number;
    imageUrl: string;
}
    
function GameCard({ title, price, imageUrl }: GameCardProps) {
    return (
        <div className="w-48 h-64 bg-gray-200 rounded-lg shadow-md m-4 overflow-hidden">
            <div className="w-full h-3/4 flex justify-center items-center overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-full object-fill" />
            </div>  
            <div className="h-1/4 p-0 flex flex-col justify-center items-center">
                <h2 className="text-md font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default GameCard;