import { useContext } from "react";
import CountContext from "../../store/countContext";

function TodoAddPage() {

    const {count} = useContext(CountContext)

    return ( 
        <div>
            <div>Todo Add Page {count}</div>
        </div>
     );
}

export default TodoAddPage;