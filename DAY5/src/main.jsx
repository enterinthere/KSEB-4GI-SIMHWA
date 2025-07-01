//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'//얘를 지우면 일반적인 html 페이지처럼 나옴
//import App from './App.jsx'
import router from './router/root'
import { RouterProvider } from 'react-router'
 import TestContextWrapper from '../src/store/testContext';


createRoot(document.getElementById('root')).render(
  <TestContextWrapper>
    <RouterProvider router={router} />
  </TestContextWrapper>
)
