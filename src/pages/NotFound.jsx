import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <main>
            <div className="w-[1400px] mx-auto relative">
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-20">
                    <div className="bg-slate-800 border border-slate-600 rounded-md py-12 px-8 text-slate-300 max-w-md">
                        <div className="text-6xl text-rose-500 mb-6">
                            <i className="fa-solid fa-gamepad-modern"></i>
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-slate-100">404</h1>
                        <h2 className="text-xl font-semibold mb-6">Pagina non trovata</h2>
                        <p className="mb-8 text-slate-400">
                            Sembra che la pagina che stai cercando non esista o sia stata spostata.
                        </p>
                        <Link 
                            to="/" 
                            className="inline-block bg-rose-500 hover:bg-rose-400 text-white px-6 py-3 rounded-md transition-colors font-semibold"
                        >
                            <i className="fa-solid fa-house mr-2"></i>
                            Torna alla Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound