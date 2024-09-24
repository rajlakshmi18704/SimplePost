import { AppBar,InputBase,styled,Toolbar, Typography,Badge, Avatar,Menu,MenuItem } from '@mui/material'
import  { PetsRounded,Mail, NotificationAddRounded, Notifications } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
const StyledToolbar=styled(Toolbar)(
  {
    display:"flex",
    justifyContent:"space-between"
  }
)
const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  width:"40%",
  borderRadius:theme.shape.borderRadius
}))
const Icons=styled("Box")(({theme})=>({
  display:"none",
  alignItems:"center",

  gap:"20px",
  padding:"0 10px",
[theme.breakpoints.up("sm")]:{
  display:"flex"
}
  
}))
const UserBox=styled("Box")(({theme})=>({
  alignItems:"center",
  display:"flex",
  gap:"10px",
  padding:"0 10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
  
}))

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
    <AppBar position='sticky'><StyledToolbar>
    <Typography variant='h6' sx={{display:{xs:"none",sm:"block"}}}>
  Rajlakshmi
    </Typography>
    <PetsRounded sx={{display:{xs:"block",sm:"none"}}}/>
    <Search><InputBase placeholder='search...'/></Search>
    <Icons>
    <Badge badgeContent={4} color="error">
    
  <Mail  />

</Badge>
<Badge badgeContent={2} color="error">
<Notifications />
</Badge>
  <Avatar   onClick={(e) => setOpen(true)} sx={{width:35,hieght:15}} src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5908.jpg?ga=GA1.1.836803609.1726631433&semt=ais_hybrid"/>
    </Icons>
    <UserBox>
    <Avatar sx={{width:35,hieght:15}} src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5908.jpg?ga=GA1.1.836803609.1726631433&semt=ais_hybrid"/>
    <Typography variant="span">
Join
    </Typography>
    </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar> 
    </div>
  )
}

export default Navbar
