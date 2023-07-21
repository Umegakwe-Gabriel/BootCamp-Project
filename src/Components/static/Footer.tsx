import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <Cover>
        <Holder>
          <BigTxt>Product</BigTxt>
          <Hold>
            <Write>Elite Membership</Write>
            <Write>Coach</Write>
            <Write>Sign Up</Write>
            <Write>Log in</Write>
          </Hold>
        </Holder>
        <Holder>
          <BigTxt>Resource</BigTxt>
          <Hold>
            <Write>Workout Plans</Write>
            <Write>Excercise Database</Write>
            <Write>Community</Write>
            <Write>Help Center</Write>
          </Hold>
        </Holder>
        <Holder>
          <BigTxt>Legal Press</BigTxt>
          <Hold>
            <Write>Privacy Policy</Write>
            <Write>Terms Of Use</Write>
            <Write>IP / DMCA Notices</Write>
            <Write>Press & Media</Write>
          </Hold>
        </Holder>
        <Holder>
          <BigTxt>Follow Us</BigTxt>
          <Hold>
            <Write>Blog</Write>
            <Write>Facebook</Write>
            <Write>Twitter</Write>
            <Write>Instagram</Write>
          </Hold>
        </Holder>
          </Cover>
        <Words>Copyright © 2010 - 2023 Jefit, Inc.</Words>
        <Words style={{marginTop: "10px"}}>All Rights Reserved.</Words>
        </Main>
      </Container>
    </div>
  )
}

export default Footer;

const Cover = styled.div`
display: flex;
margin-bottom: 30px;
`
const Words = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Write = styled.div`
margin-bottom: 10px;
font-family: "DM Sans", sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 30px;
color: #7e868c;
cursor: pointer;
:hover{
  color: #257cff;
}
`
const Hold = styled.div``
const BigTxt = styled.div`
margin-bottom: 15px;
font-family: "Barlow Semi Condensed", sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 30px;
width: 150px
`
const Holder = styled.div`
margin-right: 200px;
margin-top: 30px;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
flex-direction: column;
`
const Container = styled.div`
background-color: rgb(252,252,253);
margin-top: 20px;
height: 400px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`