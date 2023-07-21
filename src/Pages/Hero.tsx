import React from 'react'
import styled from 'styled-components';
import img from ".././assets/gage.png"

const Hero = () => {
  return (
    <div>
        <Container>
          <Main>
            <Holder>
              <Hold>
              <BigTxt>MANAGE & TRACK ALL YOUR WORKOUTS IN ONE PLACE</BigTxt>
              <SmallTxt>#1 Popular Workout Tracking Platform
               Stay Strong Together</SmallTxt>
              </Hold>
               <Img src={img}/>
            </Holder>
          </Main>
        </Container>
    </div>
  )
}

export default Hero;

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`
const Img = styled.img`
width: 640px;
margin-left: 45px;
`
const SmallTxt = styled.div`
font-family: Montserrat, sans-serif;
font-size: 30px;
font-weight: 700;
line-height: 29px;
font-style: italic;
color: white;
width: 555px;
`
const BigTxt = styled.div`
font-family: Montserrat, sans-serif;
font-size: 49px;
font-weight: 700;
line-height: 60px;
color: white;
margin-bottom: 30px;
width: 555px;
`
const Holder = styled.div`
display: flex;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 120vh;
background-image: url(https://static.wixstatic.com/media/754e92_6bf49b9554bb4b00a53272dee4c608e7~mv2.jpg/v1/fill/w_1304,h_712,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/754e92_6bf49b9554bb4b00a53272dee4c608e7~mv2.jpg);
background-color: rgb(19,65,74);
position: relative;
display: flex;
align-items: center;
justify-content: center;
`