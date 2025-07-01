import { useSearchParams } from "react-router";
import TodoListContainer from "../../components/todo/todoListContainer";
import { useContext } from "react";
import CountContext from "../../store/countContext";

function TodoListPage() {

    const {count} = useContext(CountContext)
    


    return (
        <div>
            <div>Todo List Page {count} </div>
            <TodoListContainer/>

        </div>
    );
}

export default TodoListPage;