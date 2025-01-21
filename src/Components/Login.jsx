
import React from 'react'
<TextField id="outlined-basic" label="Outlined" variant="outlined" />
const Login = () => {
  return (
    <div>
        <h1>Login page</h1>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="outlined">Login</Button>
        
    </div>
  )
}

export default Login