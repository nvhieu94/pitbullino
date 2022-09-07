import React from "react";
import { Box, Button, Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
// import {Link} from 'react-scroll'
import logo from 'assets/images/LOGO-PITBULL-INU-01.png';
import Image from 'next/image'
import { useRouter } from "next/router";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import {HeaderWrapper, BoxNavbarWrapper,MenuListWrapper} from '../../Header/HeaderStyled';
import UserMenu from '../../../Menu/UserMenu';

const pages = [
 
  {
    title: "Home",
    key: '/'
  },
  {
    title: "About Us",
    key: '/#about-us'
  },
  {
    title: "Tokenomics",
    key: '/#tokenomics'
  },
  {
    title: "Roadmap",
    key: '/#roadmap'
  },
  {
    title: "SAFU Audit & KYC",
    key: '/#audit'
  },
  {
    title: "Whitepaper",
    key: 'https://contact-188.gitbook.io/pitbull-inu/'
  },
];



const SwapHeader = () => {

  const router = useRouter();
 
  const [openModalLucky, setOpenModalLucky] = React.useState<boolean>(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [isOpenDrawer,setIsOpenDrawer] = React.useState<boolean>(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenModalLucky = () => {
    setOpenModalLucky(true);
   
  };
  const onCloseModalLucky = () => {
    setOpenModalLucky(false);
  };

  return (
    <HeaderWrapper>
        <Container>
        <Toolbar disableGutters>
            <Box sx={{  mr: 1 }}> <Image  src={logo.src} alt="" width={132} height={116} /></Box>
            <BoxNavbarWrapper sx={{ flexGrow: 1,justifyContent:"center", display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                    <Link key={page.key} href={page.key.toString()}>
                        <Button
                            className="navbar_item"
                            onClick={handleCloseNavMenu}
                            sx={page.key !== "spin"?  { my: 2, }: { my: 2, color:'red', background:'red' }}
                        >
                            {page.title}
                        </Button>
                    </Link>
            
                ))}
          </BoxNavbarWrapper>
          <Box sx={{ flexGrow: 0 ,display: { xs: "none", md: "flex" }}} className="actions">
            <UserMenu />
                {/* <Button onClick={()=>router.push('/swap')} className="btn_buy_now">BUY NOW</Button> */}
          </Box>
          <Box sx={{ flexGrow: 0 ,display: { xs: "flex", md: "none" }}} className="actions">
                <Button onClick={()=>setIsOpenDrawer(true)}  className="btn_buy_now"><DehazeIcon /></Button>
          </Box>
          <Drawer
            anchor="left"
            open={isOpenDrawer}
           
            onClose={()=> setIsOpenDrawer(false)}
          >
         <Paper sx={{ width: 320, maxWidth: '100%', backgroundColor:'#222' }}>
            <MenuListWrapper>

            {pages.map((page) => (
                 <MenuItem divider sx={{boxShadow:"none",}}>
                    <Link key={page.key} href={page.key.toString()}>
                        <Button
                            className="navbar_item"
                            onClick={handleCloseNavMenu}
                            sx={page.key !== "spin"?  { my: 2, }: { my: 2, color:'red', background:'red' }}
                        >
                            {page.title}
                        </Button>
                    </Link>
                 </MenuItem>
                ))
            }
             <MenuItem divider sx={{boxShadow:"none",}}>
                <UserMenu />
            </MenuItem>
            </MenuListWrapper>
            </Paper>
 
          </Drawer>
        </Toolbar>
        </Container>
    </HeaderWrapper>
    
    
  );
};
export default SwapHeader;
