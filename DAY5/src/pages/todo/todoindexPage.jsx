import { NavLink, Outlet } from "react-router";
import BasicLayout from "../../laylouts/basiclayout";
import { useState } from "react";
import CountContext from "../../store/countContext";

function TodoIndexPage() {

    const [count,setCount] = useState(33)

    const change = () => {
        setCount(() => count + 1)
    }

    return ( 
        <BasicLayout>
            <CountContext.Provider value={ {count,change }}>
            <div className="w-full">
                Todo Menus...
                <div> <NavLink to={'/todo/add'}>ADD</NavLink></div>
            </div>
            <div className="w-full">
                <Outlet/>
            </div>
            </CountContext.Provider>
        </BasicLayout>
    );
}

export default TodoIndexPage;