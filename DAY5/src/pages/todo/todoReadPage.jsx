import { useParams } from "react-router";

function TodoReadPage() {

    const {tno} = useParams()

    return ( 
        <div>
            <div>Todo Read Page   {tno} </div>
        </div>
     );
}

export default TodoReadPage;