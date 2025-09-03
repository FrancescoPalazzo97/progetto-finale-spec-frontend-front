import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import CompareIcon from "./CompareIcon";

const Header = () => {
    return (
        <header className='bg-slate-800 text-slate-100 fixed top-0 inset-x-0 z-30'>
            <nav className='p-6'>
                <ul className="flex justify-between items-center">
                    <li>
                        <Logo className="text-slate-300 hover:text-rose-500 transition-colors text-2xl" />
                    </li>
                    <li>
                        <ul className="flex justify-end items-center gap-4">
                            <li>
                                <NavLink className="text-slate-300 hover:text-rose-500 transition-colors" title="Confronta">
                                    <i className="fa-solid fa-code-compare text-2xl"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-slate-300 hover:text-rose-500 transition-colors" title="Aggiungi ai preferiti">
                                    <i className="fa-regular fa-heart text-2xl"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-slate-300 hover:text-rose-500 transition-colors" title="Aggiungi al carrello">
                                    <i className="fa-solid fa-cart-shopping text-2xl"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="text-slate-300 hover:text-rose-500 transition-colors" title="Profilo">
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
