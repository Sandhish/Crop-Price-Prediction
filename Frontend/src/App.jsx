import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/LoginRegister/Login"
import Register from "./Components/LoginRegister/Register"
import UserPages from "./Pages/userPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPages />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<UserPages />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
