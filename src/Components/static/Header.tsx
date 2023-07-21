import React from 'react'
import styled from "styled-components"
import Button from '../reuse/Button';


const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>JETFIT</Logo>
          <Learn>WorkOut Plans</Learn>
          <Auth>
          <Button text="Sign In" fw="550" bg="white" cc="blue" hbg="blue" hcc="white" hb="" fs="19px" bb='7px' w='110px'/>
          <Button text="Sign Up" fw="550" bg="white" cc="blue" hbg="blue" hcc="white" hb="" fs="19px" bb='7px' w='110px' />
          </Auth>
        </Main>
      </Container>
    </div>
  )
}

export default Header;

const Auth = styled.div`
display: flex;
`
const Learn = styled.div`
font-size: 19px;
line-height: 70px;
font-weight: 400;
font-family: "DM Sans", sans-serif;
color: #f8fbfb;
cursor: pointer;
`
const Logo = styled.div`
font-size: 30px;
line-height: 35px;
font-weight: 800;
font-family: "DM Sans", sans-serif;
color: #f8fbfb;
cursor: pointer;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
width: 100%;
height: 70px;
background-color: rgb(37,125,254);
display: flex;
justify-content: center;
align-items: center;
position: fixed;
z-index: 10;
`