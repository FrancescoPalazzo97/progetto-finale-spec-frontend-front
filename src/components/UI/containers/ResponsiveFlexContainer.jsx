import React from 'react'

const ResponsiveFlexContainer = ({ children, className = '' }) => {
    return (
        <div className={`flex flex-col items-center px-20 lg:px-0 lg:items-stretch lg:flex-row ${className}`}>
            {children}
        </div>
    )
}

export default ResponsiveFlexContainer
