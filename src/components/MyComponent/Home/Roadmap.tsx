import {Box, } from '@mui/material'
import roadmap from 'assets/images/roadmap.png';
import Image from 'next/image';
import {RoadmapWrapper,} from './HomeStyled';

const Roadmap = () => {

    return <RoadmapWrapper id="roadmap">
                <Box className='road-map_img'>
                    <Image src={roadmap.src} width={2086} height={2019}/>
                </Box>
    </RoadmapWrapper>
}

export default Roadmap;