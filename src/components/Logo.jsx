import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <NavLink to='/'>
            <h1 className="text-slate-300 hover:text-white uppercase text-4xl font-black">GamerLand</h1>
        </NavLink>
    )
}

export default Logo
