import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register'


const App = () => {
  return (
    <div>
     <navbar/>
     <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </div>
  )
}

export default App