import React , { useState} from 'react'
import { Navbar, AsideNav, MainContent, QuickFilters } from './index'

const HomePage = () => {

  const [component, setComponent] = useState('home');
  const [activeComponent, setActiveComponent] = useState('home');

  const loadComponent = (currComponent) => {
    setComponent(currComponent)
  }

  const showAsActive = (id) => {
    setActiveComponent(id)
  }

  return (
    <div className="w-full overflow-hidden bg-[#FFFFFF]">
      <div className="w-full sm:min-h-[95px] min-h-[128px]">
        <header className={`bg-[#FFFFFF] fixed top-0 right-0 left-0 z-50 drop-shadow`}>
          <Navbar loadComponent={loadComponent} showAsActive={showAsActive} activeComponent={activeComponent}/>
        </header>
      </div>

      {/* Main */}
      <main className="flex justify-between items-start sm:flex-row flex-col">

        <div className="w-[350px]">
          <AsideNav loadComponent={loadComponent} showAsActive={showAsActive} activeComponent={activeComponent} />
        </div>

        <div className="flex-1">
          <MainContent load={component} />
        </div>
        <div className="flex-2 justfiy-center items-center sm:p-3 p-4">
          <QuickFilters />
        </div>
      </main>
    </div>
  )
}

export default HomePage