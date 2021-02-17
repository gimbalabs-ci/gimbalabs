import { SideBarButton } from '../Utilities'
import Link from 'next/link'
 
export default function TinkerLayout({ children }) {
        
    return (
      <div className="grid grid-cols-12 mt-5 content-center h-full">
          <div className="bg-purple-700 bg-opacity-80 col-span-3 p-4 w-96">
              <Link href='/tinker'>
                  <a>
                      <SideBarButton>What do we mean by tinkering?</SideBarButton>
                  </a>
              </Link>
              <Link href='/tinker/dandelionapis'>
                  <a>
                      <SideBarButton>Dandelion APIs</SideBarButton>
                  </a>
              </Link>
              <Link href='/tinker/liftwallet'>
                  <a>
                      <SideBarButton>LIFT Wallet</SideBarButton>
                  </a>
              </Link>
              <Link href='/tinker/playground'>
                  <a>
                      <SideBarButton>Gimbalabs Playground</SideBarButton>
                  </a>
              </Link>
          </div>
          <div className="bg-blue-500 col-span-9 p-4">{children}</div>
      </div>
  )
}