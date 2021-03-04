import Image from 'next/image'
import TinkerLayout from '../../components/Layouts/TinkerLayout'
import { CardHeading, Paragraph } from '../../components/Type'

export default function liftwallet() {
    return (
        <>
            <TinkerLayout>
                <CardHeading>LIFT Wallet</CardHeading> 
                <Paragraph>
                <a href="https://github.com/CodingOnChain/lift-wallet" className="classic">LIFT Wallet</a> pushes our understanding of what a "wallet" is in the first place. If one goal of Cardano is mainstream adoption, we're going to need all sorts of different wallets that serve different needs, and in some cases even shield the end user from knowing they're relying on a blockchain in the first place.
            </Paragraph>
            <Paragraph>
                Developed by a growing team - and often developed live on Coding on Chain, LIFT Wallet is tinkerers, builders, and everyone who wants to understand more deeply how Cardano works.
            </Paragraph>   
            </TinkerLayout>
            
        </>
        
    )
}