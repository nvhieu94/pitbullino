import styled from "styled-components";
import {Box} from '@mui/material';



export const PageSectionFirst = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: #f2ce95;

`

export const BoxWrappSection = styled(Box)`
      text-align: center;

      p{
        margin: 0 0 2em;
        font-weight: 600;
        color: white;
      }

`
export const PageSectionJackpot = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: white;
    
        .jackpot-right {
          text-align: center;
          p {
            margin: 0 0 2em;
              font-weight: 600;
              color: #FF9C00;
          }
          h3 {
            color: #FF9C00;
            font-weight: 700;
          }
        }

`

export const PageSection3 = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: #ff9c00;
    
        .jackpot-right {
          text-align: center;
          p {
            margin: 0 0 2em;
              font-weight: 600;
              color:white;
          }
          h3 {
            color: white;
            font-weight: 700;
          }
        }

`

export const ExchangesWrapper = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: white;
        .exchange-header {
          text-align: center;
          font-size: 52px;
          font-weight: 600;
          color: #000;
        }
        .jackpot-right {
          text-align: center;
          p {
            margin: 0 0 2em;
              font-weight: 600;
              color:white;
          }
          h3 {
            color: white;
            font-weight: 700;
          }
        }
`
export const PartnerWrapper = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: #f2ce95;
        .exchange-header {
          text-align: center;
          font-size: 52px;
          font-weight: 600;
        }
        .jackpot-right {
          text-align: center;
          p {
            margin: 0 0 2em;
              font-weight: 600;
              color:white;
          }
          h3 {
            color: white;
            font-weight: 700;
          }
        }

`

export const AboutUsSectionWrapper = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: #bc7657;
        color: white;
        .header {
          text-align: center;
          font-size: 26px;
          font-weight: 600;
          color: white;
        }
        p {
            margin: 0 0 2em;
              font-weight: 600;
              color:white;
          }
`

export const TokenomicsSectionWrapper = styled(Box)`
        padding: 20px 10px 10px 10px;
        /* position: relative; */
        background-color: white;
        color: white;
        .column-right-image {
          z-index: 99;
          text-align: center;
          img {
            /* margin-top: -120px; */
            @media (max-width: 768px) {
              margin-top: 0px !important;
            }
            /* position: absolute; */
          }
        }
        .header {
          text-align: center;
          font-size: 52px;
          font-weight: 600;
          color: #000;
        }
        p {
            margin: 0 0 2em;
              font-weight: 600;
              color:#FF9C00;
          }
`

export const RoadmapWrapper = styled(Box)`
        padding: 80px 10px 10px 10px;
        background-color: #ff9c00;
        color: white;
        .road-map_img {
          text-align: center;
          img {
            margin-top: -80px;
            width: 100%;
            @media (max-width: 768px) {
              margin-top: -20px !important;
            }
          }
        }
       
`

export const ScurityWrapper = styled(Box)`
        padding: 20px 10px 10px 10px;
        background-color: #bc7657;
        color: white;
        .image_left {
          text-align: center;
          img {
            margin-top: -90px;
            width: 78%;
            @media (max-width: 768px) {
              margin-top: 0px !important;
            }
          }
        }
        .header {
          font-weight: 600;
          font-size: 26px;
        }
        .audit_text {
          font-weight: 600;
          font-size: 30px;
        }
        .btn-group {
          display: flex;
          justify-content: center;
          @media (max-width: 768px) {
              display:inline-block !important;
            }
          a{
            background-color: #00d084;
            padding: 4px 16px 4px 16px;
            border-radius: 2px;
            margin: 4px;
            &:hover {
              background-color: #f78da7;
            }
            color: white;
          
          }
        }
       
`

export const CommunityTransactionWrapper = styled(Box)`
        padding: 10px 0 0 0;
        background-color: #bc7657;
        color: white;
     
        .header {
          text-align: center;
          font-weight: 600;
          font-size: 26px;
          padding-bottom: 30px;
        }
        .description {
          text-align: center;
          p{
            line-height: 32px;
            font-weight: 700;
          }
          padding-bottom: 30px;
        }
        .image {
          text-align: center;
        }
        .audit_text {
          font-weight: 600;
          font-size: 30px;
        }
        .btn-group {
          display: flex;
          justify-content: center;
          @media (max-width: 768px) {
              display:inline-block !important;
            }
          a{
            background-color: #00d084;
            padding: 4px 16px 4px 16px;
            border-radius: 2px;
            margin: 4px;
            &:hover {
              background-color: #f78da7;
            }
            color: white;
          
          }
        }
       
`

export const JoinOutCommunityWrapper = styled(Box)`
        padding: 80px 10px 10px 10px;
        background-color: white;
        color: #BC7657;
     
        .header {
          text-align: center;
          font-weight: 600;
          font-size: 26px;
          padding-bottom: 30px;
        }
        .description {
          text-align: center;
          p{
            line-height: 32px;
            font-weight: 700;
          }
          padding-bottom: 30px;
        }
         
`


