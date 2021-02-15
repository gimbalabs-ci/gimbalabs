import Link from 'next/link'

function Footer() {
    return (
        <div className="bg-purple-700 lg:p-6 text-white w-full lg:fixed lg:bottom-0 lg:z-40"> 
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
             
          </div>
    )
}

export default Footer
