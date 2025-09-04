import React from 'react'

const ResponsiveFlexContainer = ({ children, className = '' }) => {
    return (
        <div className={`flex flex-col sm:flex-row sm:flex-wrap ${className}`}>
            {children}
        </div>
    )
}

export default ResponsiveFlexContainer
