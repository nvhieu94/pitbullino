import {Grid,Box, Typography} from '@mui/material'
import jackpotImage from 'assets/images/jackpot.png';
import Image from 'next/image';
import {PageSectionJackpot,} from './HomeStyled';

const SectionJackpot = () => {

    return <PageSectionJackpot>
            <Grid container >
            <Grid item xs={12} md={6} xl={6}>
                <Image  src={jackpotImage.src} width={720} height={482}/>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <Box className='jackpot-right'>
                    {/* <Image src={section1_pibull_text.src} width={500} height={75}/> */}
                    <Typography />
                    <Typography component="h3" variant="h3">WHAT IS THE PITI JACKPOT?</Typography>
                    <Typography />
                    <Typography>THE LAST 10 * BUYERS WHO PURCHASED $ PITI GET TO ENTER THE JACKPOT.</Typography>
                    <Box sx={{height:50}} />
          
                    <Typography>IF THERE ARE NO * PURCHASES FOR 20 MINUTES, ONE OF THE LAST 10 BUYERS WILL GET 25% OF THE JACKPOT WALLET!</Typography>
                    <Typography>* JACKPOT WALLET IS A WALLET THAT RECEIVES 4% MARKETING TAX</Typography>
                    <Box sx={{height:50}} />
                    <Typography>* MUST BUY 0.2 BNB OR MORE TO ENTER THE JACKPOT</Typography>
                </Box>
            </Grid>
            </Grid >
    </PageSectionJackpot>
}

export default SectionJackpot;