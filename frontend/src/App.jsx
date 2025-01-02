import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home'
import Courses from './pages/Courses'
import Budgeting from './pages/Budgeting'
import Investing from './pages/Investing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import "./index.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/investing"  element={<Investing />} />
            <Route path="/budgeting" element={<Budgeting />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
