const BackgroundImage = ({ imageUrl }) => {
    return (
        <div
            className="bg-cover bg-center h-[35vh] w-full"
            style={{ backgroundImage: `url('${imageUrl}')` }}
        />
    )
}

export default BackgroundImage
