import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from './pages/Login'
import { Galery } from './pages/Galery'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Reviews } from "./pages/Reviews"
import { Reservation } from "./pages/Reservation"

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />} />
          <Route path='/galery' element={<Galery />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/reservation' element={<Reservation />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
