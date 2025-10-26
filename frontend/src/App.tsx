import './App.css'
import { GuestRoute, PrivateRoute } from './AuthRoute'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<GuestRoute children={<SignIn />}></GuestRoute>} />
        <Route path='signup' element={<GuestRoute children={<SignUp />}></GuestRoute>}/>
        <Route path='/' element={<PrivateRoute children={<Main/>}></PrivateRoute>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
