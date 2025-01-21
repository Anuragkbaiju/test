import React from 'react'

const navbar = () => {
  return (
    <>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Application
          </Typography>
          <Link to={'/login'}><Button color="inherit">Login</Button>
          <Link to={'/register'}>/Link></Link><Button color="inherit">Register</Button>
          <Link to={'/'}><Button color="inherit">Home</Button>
        </Toolbar>
      </AppBar>
    </Box>

    </>
  )
}

export default navbar