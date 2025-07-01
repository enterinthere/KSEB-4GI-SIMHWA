import { NavLink } from "react-router";

function BasicLayout({children}) {
    return ( 
<>
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-xl font-bold">로고</div>
      <div className="space-x-6 hidden md:flex">
            <NavLink to = "/" className="block text-white py-2">Main</NavLink>
            <NavLink to = "/about" className="block text-white py-2">About</NavLink>
      </div>
      
      <div className="md:hidden">
        <button className="text-white" id="menu-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    {/* 밑에 /는 main을 뜻한다*/}
    <div id="mobile-menu" className="hidden md:hidden bg-gray-800 p-4">
      <NavLink to = "/" className="block text-white py-2">Main</NavLink>
      <NavLink to = "/about" className="block text-white py-2">About</NavLink>
    </div>
  </nav>

  
  <div className="container mx-auto py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {children}
  </div>
</>  
     );
}

export default BasicLayout;