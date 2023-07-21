import React from 'react'
import Button from '../Components/reuse/Button'
import styled from 'styled-components';

const Suit = () => {
  return (
    <>
        <Container>
            <Main>
                <Words>Plans that suits you best</Words>
                <Holder>
                <Img/>
                <Main1>
                    <Icon/>
                    <BigDiv>Free </BigDiv>
                    <Works>Basic</Works>
                    <Works>Ads supported</Works>
                    <Works>Flexible workout planner</Works>
                    <Works>Top-notch log tracker</Works>
                    <Works>1400+ exercises library</Works>
                    <Works>Body stats tracking tools</Works>
                    <Works>Support interval training</Works>
                    <Button/>
                </Main1>
                </Holder>
            </Main>
        </Container>
    </>
  )
}

export default Suit;

const Works = styled.div``
const BigDiv = styled.div``
const Icon = styled.div``
const Img = styled.div``
const Words = styled.div``
const Main1 = styled.div``
const Holder = styled.div``
const Main = styled.div``
const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
`