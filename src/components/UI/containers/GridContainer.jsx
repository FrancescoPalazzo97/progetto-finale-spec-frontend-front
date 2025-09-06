const GridContainer = ({
    children,
    cols = 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
    className = ''
}) => {
    return (
        <div className={`grid ${cols} ${className}`}>
            {children}
        </div>
    )
}

export default GridContainer
