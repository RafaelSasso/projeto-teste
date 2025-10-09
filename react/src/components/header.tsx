import { Link } from "react-router-dom";
import silksongBanner from '../assets/silksong-banner.jpg';

function Header() {
    return (
    <header className="w-full h-20 bg-[var(--header-color)] text-[var(--text-color)] flex items-center justify-center overflow-hidden">
            <nav className="w-full px-4 h-full flex justify-between items-center">
                <Link to="/" className="flex items-center h-full gap-3 flex-shrink-0">
                    <img src={silksongBanner} alt="Logo" className="h-3/4 rounded-lg max-h-full object-contain" />
                    <span className="hidden sm:inline text-2xl font-semibold">GameStore</span>
                </Link>

                <div className="flex items-center h-full text-xl space-x-4 justify-center flex-1">
                    <Link to="/games" className="h-2/3 px-3 flex items-center border-2 border-transparent hover:border-[var(--hover-color)] transition-ease-in-out duration-300 rounded-md">Games</Link>
                    <Link to="/about" className="h-2/3 px-3 flex items-center border-2 border-transparent hover:border-[var(--hover-color)] transition-ease-in-out duration-300 rounded-md">Sobre</Link>
                    <Link to="/contact" className="h-2/3 px-3 flex items-center border-2 border-transparent hover:border-[var(--hover-color)] transition-ease-in-out duration-300 rounded-md">Contato</Link>
                </div>

                <Link to="/cart" className="flex items-center h-full">
                    <button className="h-3/4 px-10 rounded-lg flex items-center justify-center max-h-full border-2 border-transparent hover:border-[var(--hover-color)] transition-ease-in-out duration-300">
                        Cart
                    </button>
                </Link>
            </nav>
        </header>
    );
}

export default Header;