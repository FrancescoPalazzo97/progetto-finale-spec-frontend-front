import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const GamesLayout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="pt-[90px]">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default GamesLayout
