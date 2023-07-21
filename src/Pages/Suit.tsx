import React from 'react'
import Button from '../Components/reuse/Button'
import styled from 'styled-components';
import img from "../assets/main1.jpg"
import img1 from "../assets/main2.jpg"
import img2 from "../assets/main2.jpg"
import {BsFillStarFill} from "react-icons/bs"
import {FaChessKing} from "react-icons/fa"
import {BsGearFill} from "react-icons/bs"

const Suit = () => {
  return (
    <>
        <Container>
            <Main>
                <Words>Plans that suits you best</Words>
                <Hold>
                <Holder>
                <Img src={img}/>
                <BgLayer></BgLayer>
                <Main1>
                    <Icon><BsFillStarFill/></Icon>
                    <BigDiv>Free </BigDiv>
                    <Works>Basic</Works>
                    <Works>Ads supported</Works>
                    <Works>Flexible workout planner</Works>
                    <Works>Top-notch log tracker</Works>
                    <Works>1400+ exercises library</Works>
                    <Works>Body stats tracking tools</Works>
                    <Works style={{marginBottom: "45px"}}>Support interval training</Works>
                    <Button text="Join Now" fw="650" bg="transparent" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px' b='2px solid white'/>
                </Main1>
                </Holder>
                <Holder>
                <Img src={img1}/>
                <BgLayer></BgLayer>
                <Main1>
                    <Icon><BsGearFill/></Icon>
                    <BigDiv>Elite
Monthly</BigDiv>
                    <Works>$12.99/month</Works>
                    <Works>All BASIC plan features</Works>
                    <Works>No ads
</Works>
                    <Works> Comprehensive training reports</Works>
                    <Works>Advanced tracking features</Works>
                    <Works>Compare records with friends</Works>
                    <Works>Exercise tips from JEFIT experts</Works>
                    <Works>Premium workout plans
More...</Works>
                    <Works style={{marginBottom: "45px"}}>Support interval training</Works>
                    <Button text="Learn More" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px'/>
                    <Money>$12.99 billed / month</Money>
                </Main1>
                </Holder>

                <Holder>
                <Img src={img}/>
                <BgLayer></BgLayer>
                <Main1>
                    <Icon><FaChessKing/></Icon>
                    <BigDiv>Elite Yearly</BigDiv>
                    <Works>$5.83/month</Works>
                    <Works>All BASIC plan features</Works>
                    <Works>No ads</Works>
                    <Works>Comprehensive training reports</Works>
                    <Works>Advanced tracking features</Works>
                    <Works>Exercise tips from JEFIT experts</Works>
                    <Works>Compare records with friends</Works>
                    <Works>Premium workout plans</Works>
                    <Works style={{marginBottom: "45px"}}>More</Works>
                    <Button text="Learn More" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px'/>
                    <Money>Save 55%, $69.99 billed / year</Money>
                </Main1>
                </Holder>
                </Hold>
            </Main>
        </Container>
    </>
  )
}

export default Suit;


const Money = styled.div`
    color: rgb(0,1,3);
    font-weight: 400;
    font-size: 22px;
    line-height: 41px;
    margin-bottom: 45px;
    margin-top: 20px;
`

const Hold = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const Works = styled.div`
font-weight: 400;
font-size: 22px;
line-height: 41px;
color: white;
margin-bottom: 5px;
`
const BigDiv = styled.div`
font-weight: 700;
font-size: 40px;
line-height: 56px;
color: white;
margin-bottom: 20px;
`
const Icon = styled.div`
font-size: 40px;
background-color: white;
margin-top: 70px;
height: 80px;
width: 70px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`
const Img = styled.img`
width: 100%;
height: 800px;
object-fit: cover;
position: absolute;
`
const BgLayer = styled.div`
    background-color: rgba(2,18,25, 0.5);
    width: 100%;
    height: 800px;
    position: absolute;
`
const Words = styled.div`
text-transform: uppercase;
color: #2f373d;
line-height: 56px;
font-size: 40px;
font-weight: 700;
font-family: Montserrat, sans-serif;
text-align: center;
margin-bottom: 50px;
`
const Main1 = styled.div`
position: absolute;
width: 92%;
height: 100%;
display: flex;
margin-left: 50px;
flex-direction: column;
`
const Holder = styled.div`
width: 385px;
height: 100%;
background-color: rgb(34,47,58);
position: relative;
border-radius: 8px;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
flex-direction: column;
`
const Container = styled.div`
min-height: 900px;
width: 100%;
display: flex;
justify-content: center;
/* padding-top: 200px; */
align-items: center;
margin-top: -170px;
`