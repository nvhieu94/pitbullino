import {Box, Typography, Container} from '@mui/material'
import {JoinOutCommunityWrapper} from './HomeStyled';



const JoinOutCommunity = () => {

    return <JoinOutCommunityWrapper>
        <Container>
        <Box className='header'>
                        JOIN OUR COMMUNITY
                    </Box>
                    <Box className='description'>
                        <Typography>
                        Extremely active community that loves our mission and doges! Our telegram is filled with community members 24/7 that would love to help you. Do not trust random messages of people claiming to be “support” or ever give out your wallet info to anyone.
                        </Typography>
                        
                    </Box>
                  
        </Container>
            
    </JoinOutCommunityWrapper>
}

export default JoinOutCommunity;