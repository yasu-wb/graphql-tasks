import './App.css'
import { GuestRoute, PrivateRoute } from './AuthRoute'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import client from './apolloClient'
import { ApolloProvider } from '@apollo/client/react'

function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<GuestRoute children={<SignIn />}></GuestRoute>} />
          <Route path='signup' element={<GuestRoute children={<SignUp />}></GuestRoute>}/>
          <Route path='/' element={<PrivateRoute children={<Main/>}></PrivateRoute>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
