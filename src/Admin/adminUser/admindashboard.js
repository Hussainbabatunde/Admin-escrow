import { AiOutlineTransaction } from 'react-icons/ai';
import { BsCloud } from 'react-icons/bs';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {MdPerson, MdDashboard} from 'react-icons/md'
import {GiCancel} from "react-icons/gi"
import {ImCheckmark} from "react-icons/im"
import {FiClock} from "react-icons/fi"
import {GrTransaction} from "react-icons/gr"
import "./admin.css";
import creative from "../images/creative.jpeg";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';



const drawerWidth = 240;



export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:"#216E8C", minHeight:"100vh"}}>
      <Toolbar />
      <Divider />
      
      <List>
        {[{words: 'Dashboard', link:"/", icon: <MdDashboard />},{words: 'User', link:"/user", icon: <MdPerson />},{words: 'Completed Transactions', link:"/completed", icon: <AiOutlineTransaction />},{words: 'Ongoing Transactions', link:"/ongoing", icon: <AiOutlineTransaction />},{words: 'Cancelled Transactions', link:"/cancelled", icon: <AiOutlineTransaction />},{words: ' Transactions based on time range', link:"/timebased", icon: <AiOutlineTransaction />}].map((text, index) => (
          <Link to={text.link} style={{textDecoration:"none", color:"white"}}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon style={{fontSize:"30px", color:"white"}}>
                {index % 2 === 0 ? text.icon : text.icon}
              </ListItemIcon>
              <ListItemText primary={text.words} style={{textAlign:"center"}}/>
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }, backgroundColor:"#216E8C"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div" sx={{fontSize:"25px"}}>
            User
          </Typography> */}
          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
          <Typography variant="h6" noWrap component="div" sx={{fontSize:"25px"}}>
            Dashboard
          </Typography>
          <div style={{display:"flex"}}>
            <img src={creative} alt="profile pic" style={{width:"40px", height:"40px", borderRadius:"40px", marginRight:"10px"}}/>
            <p style={{ marginTop:"10px", width:"160px"}}>Admininstrator name</p>
            <DropdownButton id="dropdown-basic-button">
            <Dropdown.Item href="#/action-2">Change profile picture</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </DropdownButton>
          </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor:'#E5E5E5', minHeight:"100vh" }}
      >
        <Toolbar />
        <Typography paragraph>
        <Box sx={{display:"flex", flexDirection:"column"}}>
              <Typography fontSize="30px" fontWeight="bold">Welcome back, Escrow</Typography>
              <Typography color="gray">This page shows an Overview</Typography>
             <div className='userholder' sx={{display:"flex", flexDirection:"row"}}>
               <div className="userdetails" >
                     <Typography fontSize="20px" fontWeight="bold"
                    m='20px 20px'>User Report</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between', marginTop:'20px', marginLeft:'20px', marginRight:'20px'}}>
                    <Box >
                        <Typography fontSize="20px" fontWeight="bold">Stats</Typography>
                        <Typography mb='0' >Last month</Typography>
                    </Box>
                    <Typography fontSize="25px" color='gray' fontWeight="bold" pt='10px'>6</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between', marginTop:'20px', marginLeft:'20px', marginRight:'20px'}}>
                    <Box >
                        <Typography fontSize="20px" fontWeight="bold">Stats</Typography>
                        <Typography mb='0'>Last week</Typography>
                    </Box>
                    <Typography fontSize="25px" color='gray' fontWeight="bold" pt='10px'>20</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between', marginTop:'20px', marginLeft:'20px', marginRight:'20px'}}>
                    <Box >
                        <Typography fontSize="20px" fontWeight="bold">Stats</Typography>
                        <Typography mb='0'>This Month</Typography>
                    </Box>
                    <Typography fontSize="25px" color='gray' fontWeight="bold" pt='10px'>17</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'space-between', marginTop:'20px', marginLeft:'20px', marginRight:'20px'}}>
                    <Box >
                        <Typography fontSize="20px" fontWeight="bold">Stats</Typography>
                        <Typography mb='0'>This Month</Typography>
                    </Box>
                    <Typography fontSize="25px" color='gray' fontWeight="bold" pt='10px'>50</Typography>
                    </Box>
                </div>
                <div className='usernav' sx={{width:'45%', display:'flex',flexDirection:'column'}}>
                    <Box sx={{display:'flex'}}>
                    <Box sx={{width:'48%',backgroundColor:'white',marginRight:'4%', padding:'20px', borderRadius:'10px'}}>
                    <Typography fontSize="15px" fontWeight="bold" >Ongoing Transactions</Typography>
                    <Box sx={{display:'flex', flexDirection:'row' ,marginTop:'20px'}} >
                        <Box sx={{backgroundColor:'rgb(220,220,220)',  borderRadius:"50px", height:'40px' ,width:'40px'}} >
                        <GrTransaction color='black' style={{fontSize:"25px", marginLeft:"8px", marginTop:"8px"}}/> 
                        </Box>
                        <Typography ml='20px' fontSize="30px" fontWeight="bold">45</Typography>
                       
                        </Box>
                    </Box>
                    <Box sx={{width:'48%',backgroundColor:'white',marginRight:'4%', padding:'20px', borderRadius:'10px'}}>
                    <Typography fontSize="15px" fontWeight="bold" >Completed Transactions</Typography>
                    <Box sx={{display:'flex', flexDirection:'row' ,marginTop:'20px'}} >
                        <Box sx={{backgroundColor:'rgb(220,220,220)',  borderRadius:"50px", height:'40px' ,width:'40px'}} >
                        <ImCheckmark color='green' style={{fontSize:"25px", marginLeft:"8px", marginTop:"8px"}}/> 
                        </Box>
                        <Typography ml='20px' fontSize="30px" fontWeight="bold">45</Typography>
                       
                        </Box>
                    </Box>
                    </Box>
                    <Box sx={{display:'flex', marginTop: "50px"}}>
                    <Box sx={{width:'48%',backgroundColor:'white',marginRight:'4%', padding:'20px', borderRadius:'10px'}}>
                    <Typography fontSize="15px" fontWeight="bold" >Time based Transactions</Typography>
                    <Box sx={{display:'flex', flexDirection:'row' ,marginTop:'20px'}} >
                        
                        <FiClock color='#CCCC00' style={{fontSize:"30px", marginLeft:"8px", marginTop:"8px"}}/> 
                        
                        <Typography ml='20px' fontSize="30px" fontWeight="bold">45</Typography>
                       
                        </Box>
                    </Box>
                    <Box sx={{width:'48%',backgroundColor:'white',marginRight:'4%', padding:'20px', borderRadius:'10px'}}>
                    <Typography fontSize="15px" fontWeight="bold" >Cancelled Transactions</Typography>
                    <Box sx={{display:'flex', flexDirection:'row' ,marginTop:'20px'}} >
                        
                        <GiCancel color='rgb(139,0,0)' style={{fontSize:"30px", marginLeft:"8px", marginTop:"8px"}}/> 
                        
                        <Typography ml='20px' fontSize="30px" fontWeight="bold">45</Typography>
                       
                        </Box>
                    </Box>
                    </Box>
                </div>
                </div>
            </Box>
        </Typography>
      </Box>
    </Box>
  );
}

