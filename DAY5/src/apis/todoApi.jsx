
import axios from "axios";

export async function getTodoList(page) {

    //https://jsonplaceholder.typicode.com/todos

    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}`)

    return res.data


}//fetch api 쓰는 것보다 훨씬 간단해진다. 외부에서도 사용해야 되기 때문에 export 붙여야한다. 
