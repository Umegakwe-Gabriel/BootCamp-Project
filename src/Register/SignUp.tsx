import React from 'react'
import styled from 'styled-components';
import Button from '../Components/reuse/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <Container>
        <Main>
          <Write>JETFIT</Write>
          <Holder>
            <Top>
            <Image/>
            <ImageInput/>
            <ImageLabel>Update an Image</ImageLabel>
            </Top>
            <Holder1>
            <Bottom>
              <TextHolder>UserName: </TextHolder>
                <Input placeholder='Enter Your UserName'/>
            </Bottom>
            <Bottom>
              <TextHolder>Email: </TextHolder>
                <Input placeholder='Enter Your Email'/>
            </Bottom>
            <Bottom>
              <TextHolder>Password: </TextHolder>
                <Input placeholder='Enter Your Password'/>
            </Bottom>
            <Bottom>
              <TextHolder>Confirm: </TextHolder>
                <Input placeholder='Confirm Your Password'/>
            </Bottom>
            <ButtonHolder>
            <Link to="/sign-in" style={{textDecoration: "none"}}>
            <Button text="Create Account" fw="600" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='300px'/>
            </Link>
            </ButtonHolder>
            <Div>
              <span>Already have an account?</span>
              <Link to="/sign-in">
              <span style={{color: "blue", marginLeft: "5px"}}>Sign in</span>
              </Link>
            </Div>
            <Div>
              <span style={{marginLeft: "5px", fontSize: "14px"}}>By signing up, you agree to the JEFIT <span style={{color: "blue"}}>Terms of Use</span> and <span  style={{color: "blue"}}>Privacy</span></span>
            </Div>
            </Holder1>
          </Holder>
        </Main>
      </Container>
    </>
  )
}

export default SignUp;

const ButtonHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;
`
const ImageLabel = styled.label`
padding: 10px 18px;
border-radius: 30px;
background-color: rgb(56,183,254);
color: white;
margin-top: 10px;
`
const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
line-height: 18px;
font-size: 18px;
font-weight: 400;
margin-top: 15px;
`
const ImageInput = styled.input`
display: none;
`
const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 50%;
object-fit: cover;
border: 1px solid dodgerblue;
`
const  Top = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 20px;
`
const Account = styled.div`
  color: #303030;
  font-size: 40px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 25px;
  margin-top: 25px;
  text-transform: uppercase;
`
const Holder1 = styled.div`
width: 95%;
min-height: 100px;
display: flex;
margin-top: 20px;
justify-content: center;
flex-direction: column;
`
const Input = styled.input`
outline: none;
border: none;
border-radius: 7px;
font-size: 15px;
font-weight: 400;
height: 45px;
width: 95%;
padding-left: 7px;
margin-top: 5px;
`
// const InputHolder = styled.div``
const TextHolder = styled.div``
const Bottom = styled.div`
margin: 0px 20px;
width: 100%;
margin-bottom: 10px;
`
const Holder = styled.div`
background-color: rgb(235,247,255);
width: 600px;
min-height: 600px;
margin-top: 30px;
border-radius: 10px;
`
const Write = styled.div`
width: 100%;
text-align: center;
font-size: 30px;
line-height: 18px;
font-weight: 800;
margin-top: 40px;
color: white;
`
const Main = styled.div`
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
`
const Container = styled.div`
background-color: rgb(219,232,244);
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`