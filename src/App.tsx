import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import './App.css'
import { Main } from "./components/Main/Main";

function App() {

  return (
    <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
       </Route>
    </Routes>
  )
}

export default App
