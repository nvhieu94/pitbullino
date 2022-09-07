import {Grid,Box, Typography, } from '@mui/material'
import section6Left from 'assets/images/section_6left.png';
import section6Right from 'assets/images/section_6right.png';
import Image from 'next/image';
import {CommunityTransactionWrapper} from './HomeStyled';


const CommunityTransaction = () => {

    return <CommunityTransactionWrapper>
        <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6} xl={6} sx={{
                    backgroundColor:"#ff9c00"
                }}>
                    <Box className='header'>
                        COMMUNITY
                    </Box>
                    <Box className='description' mb={8}>
                        <Typography>
                        A place where our community comes together
                        </Typography>
                        <Typography>
                        to discuss and propose ideas for Pitbull Inu
                        </Typography>
                    </Box>
                  <Box mb={10} className='image'><Image src={section6Left.src} width={300} height={288} /></Box>
                    
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                    <Box className='header'>
                        TRANSACTION
                    </Box>
                    <Box className='description' mb={8}>
                    <Typography>
                    You can trade $PITI on Pancakeswap, Poocoin, Dextool, 
                    </Typography>
                    <Typography>
                    cex soon, etc…
                    </Typography>
                    </Box>
                    <Box mb={10} className='image'><Image src={section6Right.src} width={300} height={288} /></Box>
                </Grid>
               
            </Grid >
            
    </CommunityTransactionWrapper>
}

export default CommunityTransaction;