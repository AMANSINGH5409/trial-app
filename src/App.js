import './App.css';
import React from 'react';
import { Navbar } from './components/index'


function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full min-h-[120px]">
        <header className={`bg-[#E9E9E9] fixed top-0 right-0 left-0 z-50 border-b-[2px] border-b-[#000000]`}>
          <Navbar />
        </header>
      </div>

      {/* Main */}
      <main className="">
      </main>
    </div>


    // <React.Fragment>
    //   <header class="sticky top-0 bg-blue-600 shadow-md  z-50 w-full px-5 py-5 flex justify-between items-center">
    //     <router-link to="/" class="text-2xl text-white">My App</router-link>
    //     <div>
    //       <router-link to="/login" class="text-white hover:bg-gray-700 px-3 rounded py-1 cursor-pointer">Login</router-link>
    //       <router-link to="/register" class="text-white hover:bg-gray-700 px-3 rounded py-1 cursor-pointer">Register</router-link>
    //     </div>
    //   </header>
    //   <div class="flex">
    //     <aside class="fixed bg-white h-screen py-5 shadow border-r-[2px] border-r-[#000000]">
    //       <div class="flex flex-col text-left">
    //         <router-link to="/" class="cursor-pointer hover:bg-gray-400 px-12 py-2 rounded">
    //           <i class="fa fa-dashboard"></i>
    //           <span class="">Dashboard</span>
    //         </router-link>
    //       </div>
    //     </aside>
    //     <main class="bg-gray-200  flex-1">
    //     </main>
    //   </div>
    // </React.Fragment>
  );
}

export default App;
