import { SideBarButton } from '../Buttons'
import Link from 'next/link'
 
export default function TinkerLayout({ children }) {
        
    return (
      <div className="grid md:grid-cols-12 mt-3 md:mt-5 content-center h-full">
          <div className="bg-purple-700 bg-opacity-80 md:col-span-3 p-2 md:p-4 w-full md:w-48 xl:w-80">
              <div className="grid grid-cols-2 md:grid-cols-1 grid-rows-3 md:grid-rows-6">
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
                <Link href='/tinker/codingonchain'>
                    <a>
                        <SideBarButton>Coding on Chain</SideBarButton>
                    </a>
                </Link>
                <Link href='/tinker/playground'>
                    <a>
                        <SideBarButton>Gimbalabs Playground</SideBarButton>
                    </a>
                </Link>
              </div>
          </div>
          <div className="bg-purple-300 bg-opacity-50 md:col-span-8 my-1 md:my-0 p-4">{children}</div>
      </div>
  )
}