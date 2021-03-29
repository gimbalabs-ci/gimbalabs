import Link from 'next/link'

function Footer() {
    return (
        <footer className="flex flex-col md:flex-row bg-purple-700 lg:p-6 text-white w-full lg:z-40"> 
            <h2 className="lg:inline-flex lg:w-auto px-5 md:text-lg hidden md:contents">Quick Links &rarr;</h2>
         
                <Link href='/cardanostarterkits'>
                  <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                    Cardano Starter Kits
                  </a>
                </Link>
              
                <Link href='/dandelionapis'>
                  <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                    Dandelion APIs
                  </a>
                </Link>

                
                <a href='https://www.youtube.com/channel/UChp9R55VgwkjMzGP9qMa66g' className="lg:inline-flex lg:w-auto md:px-5 text-center">
                  Coding on Chain
                </a>
              

                <Link href='/playground'>
                  <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                    Playground
                  </a>
                </Link>

                <Link href='/projects'>
                  <a className="lg:inline-flex lg:w-auto md:px-5 text-center">
                    Current Projects
                  </a>
                </Link>
             
          </footer>
    )
}

export default Footer
