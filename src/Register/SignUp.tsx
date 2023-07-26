import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { CreateUser } from '../Utils/AuthApi';

const SignUp = () => {

  const navigate = useNavigate()
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  })




  const {
    register,
    formState: {errors},
    handleSubmit,
    reset,
  }=useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(async (res: any)=>{
    const {userName, email, password} = res

    const formData = new FormData()
    formData.append("userName", userName)
    formData.append("email", email)
    formData.append("password", password)

      CreateUser(formData)

      reset()
      navigate("/sign-in")
  })
  return (
    <>
      <Container>
        <Main>
          <Write>JETFIT</Write>
          <Holder onSubmit={onSubmit}>
            
            <Holder1>
            <Bottom>
              <TextHolder>UserName: </TextHolder>
                <Input placeholder='Enter Your UserName'
                {...register("userName")}/>
                {errors.userName && <Error>userName Error</Error>}
            </Bottom>
            <Bottom>
              <TextHolder>Email: </TextHolder>
                <Input placeholder='Enter Your Email' {...register("email")}/>
                {errors.userName && <Error>email Error</Error>}
            </Bottom>
            <Bottom>
              <TextHolder>Password: </TextHolder>
                <Input placeholder='Enter Your Password' {...register("password")}/>
                {errors.userName && <Error>password Error</Error>}
            </Bottom>
            <Bottom>
              <TextHolder>Confirm: </TextHolder>
                <Input placeholder='Confirm Your Password' {...register("confirm")}/>
                {errors.confirm && <Error>confirm password Error</Error>}
            </Bottom>

            {/* <Link to="/sign-in" style={{textDecoration: "none"}}> */}
            <Button type='submit' onClick={()=>{
              navigate("/sign-in")
            }}>Sign Up</Button>
             {/* </Link> */}

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

const Button = styled.button`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: dodgerblue;
  border-radius: 20px;
  border: none;
  font-size: 22px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  margin-left: 60px;
`
const Error = styled.div`
  font-size: 12px;
  color: #c9016c;
`
const ButtonHolder = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 15px;
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