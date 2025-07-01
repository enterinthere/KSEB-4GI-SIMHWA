import { useContext } from "react";
import { NavLink } from "react-router";
import { TestContext } from "../../store/testContext";

function TopMenuComponent() {

    const {account} = useContext(TestContext)

    return ( 

      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">로고</div>
          <div className="space-x-6 hidden md:flex">
            <div className="text-white">{account.uid}</div>
            <NavLink to="/" className="text-white">Main</NavLink>
            <NavLink to="/about" className="text-white">About</NavLink>
            <NavLink to="/todo" className="text-white">Todo</NavLink>
          </div>
          
          <div className="md:hidden">
            <button className="text-white" id="menu-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                
              </svg>
            </button>
          </div>
        </div>
        
        <div id="mobile-menu" className="hidden md:hidden bg-gray-800 p-4">
          <NavLink to="/" className="block text-white py-2">Main</NavLink>
          <NavLink to="/about" className="block text-white py-2">About</NavLink>
          <NavLink to="/todo" className="block text-white py-2">Todo</NavLink>
        </div>
      </nav>
    );
}

export default TopMenuComponent;