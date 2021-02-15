function CardHeading({children}) {
    return (
        <div className="justify-center">
            <p className="text-2xl mx-5 py-3 font-title">{children}</p>  
            <svg viewBox="50 0 200 1" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%"/>
            </svg>
        </div>
    )
}

export default CardHeading
