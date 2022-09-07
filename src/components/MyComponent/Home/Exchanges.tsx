import {Grid,Box, Container} from '@mui/material'
import bscScanImage from 'assets/images/bscScan.png';
import coinWatch from 'assets/images/coin_watch.png';
import avedex from 'assets/images/avedex.png';
import dexTools from 'assets/images/dex_tools.png';
import CoinMarketCap from 'assets/images/CoinMarketCap.png';
import coinGecko from 'assets/images/coinGecko.png';
import pancakeSwap from 'assets/images/pancake_swap.png';
import pinksale from 'assets/images/pinksale.png';
import pooCoin from 'assets/images/poo_coin.png';
import pitbullInuImage from 'assets/images/pitbull_inu.png';
import Link from 'next/link';
import Image from 'next/image';
import {ExchangesWrapper} from './HomeStyled';


const Exchanges = () => {

    return <ExchangesWrapper>
            <Box className='exchange-header'>
                LISTED EXCHANGES
            </Box>
            <Box mb={8} />
            <Container>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={bscScanImage.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={pancakeSwap.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={pooCoin.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={dexTools.src} width={300} height={70}/>
                </Grid>

                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={coinGecko.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={CoinMarketCap.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={avedex.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={coinWatch.src} width={300} height={70}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Image  src={pinksale.src} width={300} height={90}/>
                </Grid>
                <Grid item xs={12} md={3} xl={3}>
                    <Link href='/'><Image  src={pitbullInuImage.src} width={300} height={90}/></Link>
                    
                </Grid>
            </Grid >
            </Container>
            
    </ExchangesWrapper>
}

export default Exchanges;