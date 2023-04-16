import React from 'react';
import { Container, UncontrolledCarousel } from 'reactstrap';
import styled from 'styled-components';
import BannerImg1 from '../assets/img/maquinas/fmc1.jpg'
import BannerImg2 from '../assets/img/maquinas/fmc2.jpg'
import BannerImg3 from '../assets/img/maquinas/fmc3.jpg'

const items = [
    {
        src: BannerImg1,
        caption: '',
        key: '1'
    },
    {
        src: BannerImg2,
        caption: '',
        key: '2'
    },
    {
        src: BannerImg3,
        caption: '',
        key: '3'
    }
];

const Banner = (props) => (
    <div {...props}>
        <Bg />
        <Container>
            <BannerContainer dark items={items} />;
        </Container>
    </div>
)



export default Banner;



const BannerContainer = styled(UncontrolledCarousel)`
    margin-top: -270px;
    border-radius:10px;
    overflow:hidden;
    box-shadow: var(--shadow)


`

const Bg = styled.div`
    background-color: var(--bg-default);
    height: 270px;
    
`;
