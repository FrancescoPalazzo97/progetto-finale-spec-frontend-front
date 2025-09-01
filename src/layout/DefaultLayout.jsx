import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const DefaultLayout = () => {
    return (
        <>
            <Header />
            <div className="pt-[90px]">
                <Outlet />
            </div>
        </>
    )
}

export default DefaultLayout
