import React from 'react'

const ResponsiveGridContainer = ({ children, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ${className}`}>
            {children}
        </div>
    )
}

export default ResponsiveGridContainer
