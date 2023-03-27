import React from 'react'
import Footer from './footer';
import Header from './header';
import {
    createHistory,
    LocationProvider,
} from "@reach/router"
import { Router } from '@reach/router';
import styled from 'styled-components';
// import BodyPage from '../assets/img/body.jpg';
import BodyPage from '../assets/img/bg.jpg';

export const history = createHistory(window)


const Layout = (props) => {
    return (
        <LocationProvider history={history}>
            <Container>
                <Header />
                <Main>
                    <Router>
                        {props.children}
                    </Router>
                </Main>
                <Footer />
            </Container>
        </LocationProvider>
    )
}

export default Layout;


const Main = styled.main`
  flex: 1;
  background-image: url(${BodyPage});
  /* background-size: cover; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

