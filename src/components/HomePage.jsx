import React from 'react'
import { Navbar , AsideNav , MainContent } from './index'

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden bg-[#FFFFFF]">
      <div className="w-full min-h-[88px]">
        <header className={`bg-[#FFFFFF] fixed top-0 right-0 left-0 z-50 border-b-[2px] border-b-[#000000]`}>
          <Navbar />
        </header>
      </div>

      {/* Main */}
      <main className="flex">
        <AsideNav />
        <MainContent />
      </main>
    </div>
  )
}

export default HomePage