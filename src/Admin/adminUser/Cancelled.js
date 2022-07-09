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
import Table from 'react-bootstrap/Table';
import{BsArrowDownUp, BsThreeDots} from 'react-icons/bs'
import {MdPerson, MdDashboard} from 'react-icons/md';
import {AiTwotoneEdit, AiFillDelete} from 'react-icons/ai';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Newtable from './Newtable';
import creative from "../images/creative.jpeg";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';




const drawerWidth = 240;



export default function Cancelled(props) {
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
        {[{words: 'Dashboard', link:"/", icon: <MdDashboard />},{words: 'User', link:"/user", icon: <MdPerson />},{words: 'Completed transactions', link:"/completed", icon: <AiOutlineTransaction />},{words: 'Ongoing transactions', link:"/ongoing", icon: <AiOutlineTransaction />},{words: 'Cancelled transactions', link:"/cancelled", icon: <AiOutlineTransaction />},{words: 'All transactions', link:"/timebased", icon: <AiOutlineTransaction />}].map((text, index) => (
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
            All Cancelled Transactions
          </Typography> */}
          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
          <Typography variant="h6" noWrap component="div" sx={{fontSize:"25px"}}>
          All Cancelled Transactions
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
        <Box backgroundColor='white' w='100%' borderRadius="10px" mt="20px" minHeight="80vh">
        <Box sx={{display:"flex", justifyContent:"space-around", marginTop:"20px", marginRight:"20px"}}>
        <div>
            <p style={{fontSize:"13px"}}>From:</p>
            <input type='date' style={{outline:"none"}}/>
          </div>
          <div>
            <p style={{fontSize:"13px"}}>To:</p>
            <input type='date' style={{outline:"none"}}/>
          </div>
            <Box sx={{display:"flex", flexDirection:"row", marginTop:"20px"}}>
              <input type="text" style={{outline:"none", height:"27px"}}/>
              <button style={{border:"none", color:"white", backgroundColor:"#216E8C", height:"27px"}}>Search</button>
            </Box>
          </Box>
          <Newtable/>
        </Box>
            </Box>
        </Typography>
      </Box>
    </Box>
  );
}

