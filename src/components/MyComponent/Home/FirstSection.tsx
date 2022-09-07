import {Grid, Typography} from '@mui/material'
import image from 'assets/images/section1.png';
import sectionPibullText from 'assets/images/section1_pibull_text.png';
import Image from 'next/image';
import {PageSectionFirst,BoxWrappSection} from './HomeStyled';

const FirstSection = () => {

    return <PageSectionFirst>
            <Grid container >
            <Grid item xs={12} md={6} xl={6}>
                <Image  src={image.src} width={720} height={482}/>
            </Grid>
            <Grid item xs={12} md={6} xl={6}>
                <BoxWrappSection>
                    <Image src={sectionPibullText.src} width={500} height={75}/>
                    <Typography />
                    <Typography>INSPIRED BY THE COMMUNITY OF MEME FANS AND PET LOVERS, A NEW CRYPTOCURRENCY WAS BORN: PITBULL INU. PITBULL INU WANTED TO BUILD A FUN MEME COMMUNITY TO SPREAD AWARENESS ABOUT ANIMAL ADOPTION. THE 2% FEE FROM EACH TRANSACTION WILL BE AUTOMATICALLY DISTRIBUTED TO THE LOVE ANIMAL FUND. RELINQUISH OWNERSHIP OF THE CONTRACT. NO LIQUIDITY CONTROL. 4% WILL BE USED FOR MARKETING STRATEGIES TO ENSURE SUSTAINABLE ADDED VALUE AND JACKPOT WALLET. ALL BURNS AND SAFE. YOU MISSED OTHER IMPRESSIVE MEMES, DON’T WORRY BECAUSE PITBULL INU WILL TAKE YOU TO THE MOON.</Typography>
                </BoxWrappSection>
            </Grid>
            </Grid >
    </PageSectionFirst>
}

export default FirstSection;