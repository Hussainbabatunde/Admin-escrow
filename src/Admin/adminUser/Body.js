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
import "./admin.css";



const drawerWidth = 240;



export default function Completed(props) {
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
              <ListItemText primary={text.words} />
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
          ml: { sm: `${drawerWidth}px` },  backgroundColor:"#216E8C"
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
          <Typography variant="h6" noWrap component="div" sx={{fontSize:"25px"}}>
            All Completed Transactions
          </Typography>
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
        <Table style={{width:"95%", marginLeft:"2.5%", marginTop:"20px"}}>
            <thead>
            <th style={{color:"gray"}}>ID</th>
            <th style={{color:"gray"}}>Buyer's name</th>
                <th style={{color:"gray"}}>Seller's name</th>
                <th style={{color:"gray"}}>Witness name</th>
                <th style={{color:"gray"}}>Transaction status</th>
                <th style={{color:"gray"}}>Amount involve</th>
                <th style={{color:"gray"}}>Disbursement status</th>
            </thead>
            <tbody>
                {/* {
                    education.map((each, id)=>{
                        return (
                            <tr key={id}>
                            <td>{each.certificate_name}</td>
                            <td>{each.school_name}</td>
                            <td>{each.year_earned}</td>
                            </tr>
                        )
                    })
                } */}
                <tr >
                <td>1</td>
                  <td>Tunde</td>
                  <td>Segun</td>
                  <td>Tolu</td>
                  <td>Cancelled</td>
                  <td>20,000</td>
                  <td>Cancelled</td>
                  
                  </tr>
            </tbody>
        </Table>
        </Box>
            </Box>
        </Typography>
      </Box>
    </Box>
  );
}

