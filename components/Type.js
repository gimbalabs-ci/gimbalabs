import Link from 'next/link'

export function TitleHeading1({children}) {
    return(
        <div className="justify-center pt-10 pb-3">
                <p className="text-4xl mx-5 pb-3 font-title">{children}</p>  
                <svg viewBox="1 0 100 1" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100%" height="100%"/>
                </svg>
        </div>
    )
}

export function TitleHeading2({children}) {
    return (
        <>
            <p className="text-2xl font-title pl-5 pt-8 pb-3">{children}</p>
        </>
    )
}

export function HighlightText({children}) {
    return (
        <>
            <p className="text-xl p-6">{children}</p>
        </>
    )
}

export function Paragraph({children}) {
    return (
        <>
            <p className="px-6 pt-3 md:text-lg md:leading-relaxed text-justify md:text-left">{children}</p>
        </>
    )
}

export function ParagraphLg({children}) {
    return (
        <>
            <p className="text-lg px-6 pt-3">{children}</p>
        </>
    )
}

export function CallOutText({children}) {
    return (
        <>
            <span className="text-4xl font-title">{children}</span>
        </>
    )
}

// Card text styles

export function CardHeading({children}) {
    return (
        <div className="justify-center">
            <p className="text-2xl mx-5 py-3 font-title">{children}</p>  
            <svg viewBox="50 0 200 1" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%"/>
            </svg>
        </div>
    )
}

export function CardSubHeading({children}) {
    return (
        <>
            <p className="mx-5 py-2 text-xl">{children}</p>  
        </>
    )
}

export function CardText({children}) {
    return (
        <>
            <p className="p-4 md:px-4">{children}</p>  
        </>
    )
}

