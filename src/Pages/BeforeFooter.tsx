import React from 'react'
import Button from '../Components/reuse/Button'
import styled from 'styled-components';

const BeforeFooter = () => {
  return (
    <div>
        <Container>
            <Main>
                <BigTxt>WANT TO BUILD YOUR OWN WORKOUT PLAN?</BigTxt>
                <SmallTxt>Customize your workout plan with over 1400 free exercises in Jefit Workout Plan Builder. And easily share with friends.</SmallTxt>
                <ButtonHolder>
                <Button text="Create WorkOut Plan" fw="700" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="22px" bb='20px' w='300px'/>
                </ButtonHolder>
            </Main>
        </Container>
    </div>
  )
}

export default BeforeFooter;

const ButtonHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const SmallTxt = styled.div`
text-align: center;
color: #2f373d;
line-height: 29px;
font-size: 24px;
font-weight: 500;
font-family: Montserrat, sans-serif;
margin-bottom: 50px;
`
const BigTxt = styled.div`
text-transform: uppercase;
color: #2f373d;
line-height: 56px;
font-size: 40px;
font-weight: 700;
font-family: Montserrat, sans-serif;
text-align: center;
margin-bottom: 50px;
margin-top: 50px;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
background-color: rgb(249,251,255);
height: 350px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 500px;
`