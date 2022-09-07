import {Grid,Box, Typography} from '@mui/material'
import section3Right from 'assets/images/section3_right.png';
import Image from 'next/image';
import {AboutUsSectionWrapper,BoxWrappSection} from './HomeStyled';

const AbountUs = () => {

    return <AboutUsSectionWrapper id='about-us'>
            <Grid container >
            <Grid item xs={12} md={6} xl={6}>
                <BoxWrappSection>
                   <Box className='header' mb={8}>ABOUT PITBULL INU</Box>
                   
                   <Typography>PITBULL INU IS A REVOLUTIONARY NEW BSC TOKEN THAT COMBINES ALL THEIR BEST FEATURES TO CREATE SOMETHING COMPLETELY NEW.</Typography>
                    <Typography>ALL PITBULL INU HOLDERS WILL EARN MORE $PITI AUTOMATICALLY DEPOSITED INTO YOUR WALLET BY SIMPLY HOLDING PITBULL INU COINS IN YOUR WALLET.</Typography>
                    <Typography>WITH AN INTERNATIONAL TEAM OF EXPERTS, AN EXCITING ROADMAP, AND CODING TOOLS YOU CAN RELY ON, YOU’LL NEVER BE LATE TO A PARTY AGAIN.</Typography>
                    <Typography>SO SIT BACK, RELAX AND EARN, WHILE THE PITBULL INU WILL PASS THE SHIB TO GET YOU TO THE MOON.</Typography>
                </BoxWrappSection>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                 <Image src={section3Right.src} width={740} height={477}/>
            </Grid>
           
            </Grid >
    </AboutUsSectionWrapper>
}

export default AbountUs;