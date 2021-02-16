import Link from 'next/link'

function Footer() {
    return (
        <div className="bg-purple-700 lg:p-6 text-white w-full lg:z-40"> 
            <h2 className="lg:inline-flex lg:w-auto px-5 text-lg">&rarr;</h2>
         
                <Link href='/cardanostarterkits'>
                  <a className="lg:inline-flex lg:w-auto px-5">
                    Cardano Starter Kits
                  </a>
                </Link>
              
                <Link href='/dandelionapis'>
                  <a className="lg:inline-flex lg:w-auto px-5">
                    Dandelion APIs
                  </a>
                </Link>

                <Link href='/playground'>
                  <a className="lg:inline-flex lg:w-auto px-5">
                    Playground
                  </a>
                </Link>
             
          </div>
    )
}

export default Footer
