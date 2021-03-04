import Link from 'next/link'
import { Paragraph, TitleHeading3 } from '../Type'

export function Key100Index1({children}) {
    return (
        <div>
            <TitleHeading3>Here is a list of winners of Catalyst Fund 2</TitleHeading3>
            {children}
        </div>
    )
}

export function Key20210302Index0({children}) {
    return (
        <div>
            <TitleHeading3>CSK #001: Leave Your Mark</TitleHeading3>
            <Paragraph>Here is a list of everyone who "left their mark" on <Link href="cardanostarterkits/csk001"><a className="classic">Cardano Starter Kit #001</a></Link>. You can also <a href="https://github.com/workshop-maybe/sk01-leave-your-mark" className="classic">view this project on GitHub</a> (checkout test-list.txt).</Paragraph>
            {children}
        </div>
    )
}