import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <header className='bg-slate-800 text-slate-100 fixed top-0 inset-x-0 z-30'>
            <nav className='p-6'>
                <ul className="flex justify-between items-center">
                    <li className="w-1/3">
                        <Logo />
                    </li>
                    <li className="w-1/3">
                        <SearchBar />
                    </li>
                    <li className="w-1/3">
                        <ul className="flex justify-end items-center gap-4">
                            <li>
                                <NavLink className="text-slate-300 hover:text-white">
                                    <i className="fa-regular fa-heart text-2xl"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-slate-300 hover:text-white">
                                    <i className="fa-solid fa-cart-shopping text-2xl"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-slate-300 hover:text-white">
                                    <i className="fa-regular fa-circle-user text-3xl"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
