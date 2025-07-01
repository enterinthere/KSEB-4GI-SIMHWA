import { Outlet } from "react-router";
import BasicLayout from "../../laylouts/basiclayout";

function TodoIndexPage() {
    return ( 
        <BasicLayout>
            <div>
                Todo Menus...
            </div>
            <Outlet/>
        </BasicLayout>
    );
}

export default TodoIndexPage;