import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="self-start h-auto flex items-center p-3 bg-white border-b border-2xl border-gray-200 shadow-sm">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <nav className="flex items-center justify-between h-20 gap-10 lg:h-20">
                    <div className="flex-shrink-0">
                        <Link to="#" title="" className="flex items-center justify-center text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                            <img src="#" alt="logo" className="h-8 w-auto mr-2" />
                            <span>GameStore</span>
                        </Link>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                        <Link to="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </Link>

                        <Link to="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </Link>

                        <Link to="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </Link>

                        <Link to="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </Link>
                    </div>

                    <Link to="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </Link>
                </nav>

                <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                        <div className="flex flex-col px-6 -my-2 space-y-1">
                            <Link to="" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Games </Link>

                            <Link to="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Biblioteca </Link>

                            <Link to="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Sobre </Link>
                        </div>
                    </div>

                    <div className="px-6 mt-6">
                        <Link to="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;