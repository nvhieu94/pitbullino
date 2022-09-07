
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
// import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import React, { useEffect, useRef, useState } from 'react'
// import { NextPageWithLayout } from "@/models/index";
// mui
import {  Container} from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// components

import FirstSection from '../../components/MyComponent/Home/FirstSection';
import SectionJackpot from '../../components/MyComponent/Home/SectionJackpot';
import HomeSection3 from '../../components/MyComponent/Home/HomeSection3';
import Exchanges from '../../components/MyComponent/Home/Exchanges';
import AboutUs from '../../components/MyComponent/Home/AboutUs';
import Tokenomics from '../../components/MyComponent/Home/Tokenomics';
import RoadmapWrapper from '../../components/MyComponent/Home/Roadmap';
import ScurityCertification from '../../components/MyComponent/Home/ScurityCertification';
import CommunityTransaction from '../../components/MyComponent/Home/CommunityTransaction'
import JoinOutCommunity from '../../components/MyComponent/Home/JoinOutCommunity';
import Partner from '../../components/MyComponent/Home/Partner';
// styles


const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`
const asSeenInData = [
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-nasdaq_300x100.png?v=1646404931',
    height: 30,
    width: 106,
    link: 'https://www.nasdaq.com/articles/baby-doge-crypto%3A-5-things-to-know-about-babydoge-and-the-elon-musk-buzz-2021-07-01?amp',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cnbc_300x100.png?v=1646404932',
    height: 45,
    width: 191,
    link: 'https://www.cnbc.com/2021/07/13/what-are-altcoins-elon-musk-tweets-about-baby-dogecoin-shiba-inu.html',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-new-york-post_300x100.png?v=1646404932',
    height: 30,
    width: 200,
    link: 'https://nypost.com/2021/07/02/what-you-need-to-know-about-baby-doge-the-dogecoin-spinoff/',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-business-insider_300x100.png?v=1646404932',
    height: 30,
    width: 75,
    link: 'https://markets.businessinsider.com/news/stocks/a-dogecoin-spinoff-called-baby-doge-doubled-in-price-following-an-early-morning-tweet-from-elon-musk-1030572506',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-yahoo_300x100.png?v=1646404931',
    height: 30,
    width: 83,
    link: 'https://finance.yahoo.com/news/elon-musk-thrusts-baby-doge-130512796.html',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932',
    height: 30,
    width: 220,
    link: 'https://www.newsweek.com/dogecoin-baby-doge-coin-price-spike-elon-mask-tweets-release-doge-1605912',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-benzinga_300x100.png?v=1646404931',
    height: 30,
    width: 220,
    link: 'https://www.benzinga.com/markets/cryptocurrency/21/06/21628588/dogecoin-fans-launch-baby-doge-coin-with-average-daily-gain-of-1-213',
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-market-watch_300x100.png?v=1646404931',
    link: 'https://www.marketwatch.com/story/elon-musk-may-be-losing-his-sway-with-dogecoin-investorsbut-baby-doge-coin-is-soaring-11625160997',
    height: 30,
    width: 209,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-nasdaq_300x100.png?v=1646404931',
    link: 'https://www.nasdaq.com/articles/baby-doge-crypto%3A-5-things-to-know-about-babydoge-and-the-elon-musk-buzz-2021-07-01?amp',
    height: 30,
    width: 191,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cnbc_300x100.png?v=1646404932',
    link: 'https://www.cnbc.com/2021/07/13/what-are-altcoins-elon-musk-tweets-about-baby-dogecoin-shiba-inu.html',
    height: 30,
    width: 142.68,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-new-york-post_300x100.png?v=1646404932',
    lnk: 'https://nypost.com/2021/07/02/what-you-need-to-know-about-baby-doge-the-dogecoin-spinoff/',
    height: 45,
    width: 200,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-business-insider_300x100.png?v=1646404932',
    link: 'https://markets.businessinsider.com/news/stocks/a-dogecoin-spinoff-called-baby-doge-doubled-in-price-following-an-early-morning-tweet-from-elon-musk-1030572506',
    height: 45,
    width: 75,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-yahoo_300x100.png?v=1646404931',
    link: 'https://finance.yahoo.com/news/elon-musk-thrusts-baby-doge-130512796.html?guccounter=1',
    height: 45,
    width: 83,
  },
  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932',
    link: 'https://www.newsweek.com/dogecoin-baby-doge-coin-price-spike-elon-mask-tweets-release-doge-1605912',
    height: 30,
    width: 220,
  },

  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-benzinga_300x100.png?v=1646404931',
    link: 'https://www.benzinga.com/markets/cryptocurrency/21/06/21628588/dogecoin-fans-launch-baby-doge-coin-with-average-daily-gain-of-1-213',
    height: 30,
    width: 220,
  },

  {
    image: '	https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-market-watch_300x100.png?v=1646404931',
    link: 'https://www.marketwatch.com/story/elon-musk-may-be-losing-his-sway-with-dogecoin-investorsbut-baby-doge-coin-is-soaring-11625160997',
    height: 30,
    width: 209,
  },

  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-nasdaq_300x100.png?v=1646404931',
    link: 'https://www.nasdaq.com/articles/baby-doge-crypto%3A-5-things-to-know-about-babydoge-and-the-elon-musk-buzz-2021-07-01?amp',
    height: 30,
    width: 106,
  },

  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-cnbc_300x100.png?v=1646404932',
    link: 'https://www.cnbc.com/2021/07/13/what-are-altcoins-elon-musk-tweets-about-baby-dogecoin-shiba-inu.html',
    height: 30,
    width: 106,
  },

  {
    image: '	https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-new-york-post_300x100.png?v=1646404932',
    link: 'https://nypost.com/2021/07/02/what-you-need-to-know-about-baby-doge-the-dogecoin-spinoff/',
    height: 30,
    width: 200,
  },

  {
    image: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932',
    link: 'https://cdn.shopify.com/s/files/1/0388/4833/1916/files/hd-newsweek_300x100.png?v=1646404932',
    height: 30,
    width: 220,
  },
]

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const [document, setDocument] = useState<any>('KYC')
  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  // useEffect(() => {
  //   if(myRef && myRef.current) {

  //   }
  // },[myRef])
  // const executeScroll = () => myRef.current.scrollIntoView()
  const onHandleViewDocument = () => {
    if (typeof window !== 'undefined') {
      if (document === 'AUDIT') {
        window.location.href =
          'https://github.com/solidproof/projects/blob/main/Lucky%20Floki/SmartContract_Audit_Solidproof_LuckyFloki.pdf'
      } else if (document === 'WHITEPAPER') {
        // window.location.href = "https://drive.google.com/file/d/131ux_mW1COoNYB0lFnLW6q5GARkG7wVz/view";
        window.open('https://drive.google.com/file/d/131ux_mW1COoNYB0lFnLW6q5GARkG7wVz/view', '_blank')
      }
    }
  }

  const handleChangeDocument = (event: SelectChangeEvent) => {
    setDocument(event.target.value as string)
  }
  

  return (
    <>
      <PageMeta />
      <FirstSection />
      <SectionJackpot />
      <HomeSection3 />
      <Exchanges />
      <Partner />
      <AboutUs />
      <Tokenomics />
      <RoadmapWrapper />
      <ScurityCertification />
      <CommunityTransaction />
      <JoinOutCommunity />
    </>
  )
}

export default Home
