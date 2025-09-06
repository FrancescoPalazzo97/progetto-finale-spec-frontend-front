const FlexContainer = ({
    children,
    alignItems = 'stretch',
    sm = '',
    md = '',
    lg = '',
    xl = '',
    className = '',
}) => {
    return (
        <div className={`flex flex-col justify-center items-${alignItems} ${sm} ${md} ${lg} ${xl} ${className}`}>
            {children}
        </div>
    )
}

export default FlexContainer
