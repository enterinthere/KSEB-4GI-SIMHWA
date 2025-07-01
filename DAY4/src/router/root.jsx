// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router";
// //import AboutPage from "../pages/aboutPage";
// //import MainPage from "../pages/mainPage"; 정적이라서 지움?
// import { lazy, Suspense } from "react";
// import TodoIndexPage from "../pages/todo/todoIndexPage";

// const Loading = () => <div>Loading....</div>//문제점 해결 방안2
// const Main = lazy(() => import("../pages/mainPage"))
// const About = lazy(() => import("../pages/aboutPage"))
// const TodoList = lazy(() => import("../pages/todo/todoListPage"))


// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: <div>Hello World</div>,
//     //Component: MainPage 문제였음 밑이 해결 방안
//     element: <Suspense fallback={<Loading/>}><Main/></Suspense>,
//   },
//   {
//     path: "/about",
//     //Component: AboutPage
//     element: <Suspense fallback={<Loading/>}><About/></Suspense>,
//   },
//   {
//     path: "/todo",
//     Component: TodoIndexPage,
//     children: [
//         {
//             path: "list",
//             element: <Suspense fallback={<Loading/>}><TodoList/></Suspense>,
//         }
//     ]
//   }
// ]);//배열이다. 경로 하나가 객체 하나이다. about이란 경로를 추가할 것이다. 


// export default router;

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import { lazy, Suspense } from "react";
import TodoIndexPage from "../pages/todo/todoIndexPage";

const Loading = () => <div>Loading....</div>

const Main = lazy(() => import("../pages/mainPage"))
const About = lazy(() => import("../pages/aboutPage"))

const TodoList =lazy(() => import("../pages/todo/todoListPage"))

const router = createBrowserRouter([
{
    path: "/",
    element: <Suspense fallback={<Loading/>}><Main/></Suspense>,

},
{
    path: "/about",
    element: <Suspense fallback={<Loading/>}><About/></Suspense>,
},
{
    path: "/todo",
    Component: TodoIndexPage,
    children: [
        {
            path: "list",
            element: <Suspense fallback={<Loading/>}><TodoList/></Suspense>
        }
    ]
}
]);

export default router;