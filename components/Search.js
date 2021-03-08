import { useCallback, useRef, useState } from 'react'
import Link from 'next/link'
import search from '../pages/api/search'

export default function Search() {

    const searchRef = useRef(null)
    const [query, setQuery] = useState('')
    const [active, setActive] = useState(false)
    const [results, setResults] = useState([])

    const searchEndpoint = (query) => `/api/search?q=${query}`

    const onChange = useCallback((event) => {
        const query = event.target.value;
        setQuery(query)
        if (query.length) {
            fetch(searchEndpoint(query))
                .then(res => res.json())
                .then(res => {
                    setResults(res.results)
                })
        } else {
            setResults([])
        }
    }, [])

    const onFocus = useCallback(() => {
        setActive(true)
        window.addEventListener('click', onClick)
    }, [])

    const onClick = useCallback((event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setActive(false)
            window.removeEventListener('click', onClick)
        }
    }, [])

    return (
        <div ref={searchRef} className="mx-2 lg:mx-5">
            <input onChange={onChange} onFocus={onFocus} placeholder='Search Gimbalabs' type='text' value={query} />
            { active && results.length >0 && (
                <ul className="absolute">
                    {results.map(({ id, title, sitePath }) => (
                        <li className="bg-purple-700 hover:bg-purple-300 bg-opacity-90 hover:bg:opacity-100 text-white hover:text-black text-lg font-bold m-1 p-3" key={id}>
                            <Link href={`${sitePath}/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}