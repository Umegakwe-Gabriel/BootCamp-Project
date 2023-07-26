import React from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInUser } from '../Utils/AuthApi';
import { signUserGlobal } from '../Global/AuthGlobal';

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state: any)=> state.user)

  const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),

  })

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset
  }= useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(async(res: any)=>{
    SignInUser(res).then((resp)=>{
      dispatch(signUserGlobal(resp))
      navigate("/main")
    }).catch(err => {
      console.log(err)
    })
  })

  return (
    <>
      <Container>
        <Main>
          <Write>JETFIT</Write>
          <Holder onSubmit={onSubmit}>
          <Account>Sign In</Account>
            <Holder1>
            <Bottom>
              <TextHolder>Email: </TextHolder>
                <Input placeholder='Enter Your Email' {...register("email")}/>
                {errors.email && <Error>email error</Error>}
            </Bottom>
            <Bottom>
              <TextHolder>Password: </TextHolder>
                <Input placeholder='Enter Your Password' {...register("password")}/>
                {errors.email && <Error>password error</Error>}
            </Bottom>

            <Button type="submit" onClick={()=>{
              navigate("/main")
            }}>Sign In</Button>
            <Div>
              <span>Don't have an account?</span>
              <Link to="/sign-up">
              <span style={{color: "blue", marginLeft: "5px"}}>Sign Up</span>
              </Link>
            </Div>
            
            </Holder1>
          </Holder>
        </Main>
      </Container>
    </>
  )
}

export default SignIn;

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
const Button = styled.button`
  width: 220px;
  height: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: dodgerblue;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  border: 0;
  outline: none;
  font-family: Poppins;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 100px;
`
const Error = styled.div`
  font-size: 12px;
  color: #c9016c;
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
  text-align: center;
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
min-height: 400px;
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