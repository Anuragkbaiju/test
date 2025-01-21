import React from 'react'

const Register = () => {
  return (
    <div>
          <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div>
        <TextField
          required
          id="outlined-required"
          label="Student name"
          Type="text"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Student Id"
          defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
        
        />
        <TextField
          id="outlined-read-only-input"
          label="Address"
          Type="text"
      
        />
        </div>
        <TextField
          id="outlined-number"
          label="Phone Number"
          type="number"
      
        />
        <div>
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Qualification"
          type="text"
        />
        </div>
     
            
      </div>
    </Box>
    </div>
  )
}

export default Register