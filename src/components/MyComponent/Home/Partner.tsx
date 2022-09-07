import {Box} from '@mui/material'
import partnerIamge  from 'assets/images/partner.png'
import Image from 'next/image';
import {PartnerWrapper} from './HomeStyled';


const Partner = () => {

    return <PartnerWrapper>
            <Box className='exchange-header'>
                LIST PARTNER
            </Box>
            <Box mb={8} />
            <Box sx={{textAlign:"center"}}>   <Image  src={partnerIamge.src} width={1202} height={500}/></Box>
         
            
    </PartnerWrapper>
}

export default Partner;