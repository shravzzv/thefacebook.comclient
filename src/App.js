import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Layout from './components/Layout'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import About from './pages/about'
import NoMatch from './pages/noMatch'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
