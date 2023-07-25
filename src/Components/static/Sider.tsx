import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import {Link} from "react-router-dom"
import img from "../../assets/gym_icon.png"
import pix from "../../assets/noProfilePic220.png"

const Sider = ()=>{
    const toggle = useSelector((state: any)=>state.toggle)
    const dispatch = useDispatch()
    const user = useSelector((state: any)=>state.user)

    const [image, setImage] = useState("")
    const [avatar, setAvatar] = useState("")

    const handleUpload = (e: any) =>{
        const file = e.target.files[0]
        const readImage = URL.createObjectURL(file)
        setImage(readImage)
        setAvatar(file)
      }

    return (
<div>
    <Contain>
<Main>
    <Logo>JETFIT</Logo>

    <Nav style={{display: "flex",  alignItems: "center", paddingBottom: "50px"}}>
    <Top>
            <Image src={image ? image : pix}/>
            <ImageInput type='file' id='id' onChange={handleUpload}/>
            <ImageLabel htmlFor='id'>Edit Image</ImageLabel>
            </Top>
<User>Toochukwu</User>
    </Nav>

    <Nav>
<Span to="/main/workout">
    <Icon1 src={img}/>
    <div>WorkOut  Plans</div>
</Span>

<Span to="">
    <Icon></Icon>
    <div></div>
</Span>
<Span to="">
    <Icon></Icon>
    <div></div>
</Span>
    </Nav>
    
    <Nav>
<SpanII>
    <LogOuticons/>
    <Name>Log Out</Name>
</SpanII>
    </Nav>
</Main>
    </Contain>
</div>
    )
}

export default Sider;

const ImageLabel = styled.label`
padding: 7px 15px;
border-radius: 10px;
background-color: #eba084;
color: white;
font-size: 13px;
font-weight: 500;
margin-top: 5px;
`

const ImageInput = styled.input`
display: none;
`
const Image = styled.img`
width: 75px;
height: 75px;
border-radius: 50%;
object-fit: cover;
border: 1px solid orangered;
`
const  Top = styled.div`
display: flex;
flex-direction: column;

align-items: center;
width: 100%;
margin-top: 20px;
`

const Name = styled.div`
text-transform: uppercase;
flex: 0.6;
color: white;
text-align: center;
`
const LogOuticons = styled.div`
margin-right: 10px;
margin-left: 10px;
font-size: 20px;
`
const Icon1 = styled.img`
margin-right: 10px;
width: 50px;
`
const Icon = styled.div`
margin-right: 10px;
font-size: 20px;
`
const Span = styled(Link)`
overflow: hidden;
margin: 10px 0;
background-color: dodgerblue;
padding: 10px 0px 10px 10px;
color: white;
text-decoration: none;
border-radius: 3px;
cursor: pointer;
display: flex;
align-items: center;
`
const SpanII = styled.div`
overflow: hidden;
margin: 10px 0;
background-color: dodgerblue;
padding: 10px 0px 10px 10px;
color: white;
text-decoration: none;
border-radius: 3px;
cursor: pointer;
display: flex;
align-items: center;
`
const User = styled.div`
text-transform: uppercase;
flex: 0.6;
color: white;
margin-left: -10px;
`
// const Image = styled.img`
// height: 70px;
// width: 70px;
// object-fit: cover;
// border-radius: 50%;
// margin-right: 10px;
// border: 1px solid orangered;
// `
const Logo = styled.div`
text-transform: uppercase;
flex: 0.6;
/* display: flex;
align-items: center; */
width: 260px;
margin-top: 30px;
color: white;
font-size: 30px;
font-weight: 700px;
text-align: center;
`
const Nav = styled.div`
width: 230px;
transition: all 350ms;
`
const Main = styled.div`
/* padding-top: 30px; */
width: 100%;
height: 90vh;
flex-direction: column;

display: flex;
padding-right: 20px;
padding-left: 20px;
`
const Contain = styled.div`
width: 260px;
height: 100vh;
background-color: dodgerblue;
color: white;
position: relative;
`