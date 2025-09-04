import React from 'react'

const MainProductDetails = ({ children, className = '' }) => {
    return (
        <main className={`min-h-screen pb-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 ${className}`}>
            {children}
        </main>
    )
}

export default MainProductDetails
