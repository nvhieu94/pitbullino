import React from 'react';
import Image from 'next/image'
import Toolbar from '@mui/material/Toolbar'
import flokiImage from 'assets/images/floki-footer.png'
import { Box, Typography } from '@mui/material'

const LogoHeader = () => {
  return (
    <Toolbar disableGutters>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
        <Image src={flokiImage.src} alt="" width={50} height={50} />
      </Box>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          // fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: '#fff',
          textDecoration: 'none',
          
        }}
      >
        LUCKY FLOKI
      </Typography>

      <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
        <Image src={flokiImage.src} alt="" width={50} height={50} />
      </Box>

      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,

          fontWeight: 700,
          letterSpacing: '.3rem',
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        LFLOKI
      </Typography>
    </Toolbar>
  )
}

export default LogoHeader
