import { Routes, Route } from 'react-router-dom'

import './App.scss'
import Layout from './components/Layout'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import About from './pages/about'
import Contact from './pages/contact'
import Faq from './pages/faq'
import Media from './pages/media'
import Terms from './pages/terms'
import Policy from './pages/policy'
import Profile from './pages/profile'
import NoMatch from './pages/noMatch'
import { AuthProvider } from './context/auth'

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='faq' element={<Faq />} />
            <Route path='media' element={<Media />} />
            <Route path='terms' element={<Terms />} />
            <Route path='policy' element={<Policy />} />
            <Route path='profile' element={<Profile />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
