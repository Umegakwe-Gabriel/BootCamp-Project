import React from 'react'
import Button from '../Components/reuse/Button'
import styled from 'styled-components';
import {IoIosCheckmark} from "react-icons/io"
import img from "../assets/Landingphone1.png"
import img1 from "../assets/landingphone2.png"
import img2 from "../assets/landingphone3.png"

const Needs = () => {
  return (
    <div>
        <Container>
            <Main>
                <Write>Jetfit covers all of your workout plans</Write>
                <Holder>
                    <LeftSide>
                        <Color>
                        <Blue/>
                        <Orange/>
                        </Color>
                        <Img src={img}/>
                    </LeftSide>
                    <RightSide>
                        <Top>Workout training</Top>
                        <Write1>PERSONALIZE YOUR WORKOUT PLANS</Write1>
                        <Hold>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>1400+ exercises with instructions</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Pro-designed workout plans</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Support custom exercises</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Flexible workout planning tool</WriteUp>
                            </Cover>
                        </Hold>
                        <Button text="Join Now" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px'/>
                    </RightSide>
                </Holder>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Holder style={{flexDirection: "row-reverse"}}>
                    <LeftSide style={{left: "-550px"}}>
                        <Color>
                        <Blue/>
                        <Orange/>
                        </Color>
                        <Img src={img1}/>
                    </LeftSide>
                    <RightSide>
                        <Top>SMART WATCH INTEGRATION</Top>
                        <Write1>TRAIN & LOG SEAMLESSLY IN GYM AND HOME</Write1>
                        <Hold>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Log training with one-click</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Control rest time easily</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>
Available on mobile and watch</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Audio and video instructions</WriteUp>
                            </Cover>
                        </Hold>
                        <Button text="Join Now" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px'/>
                    </RightSide>
                </Holder>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Holder>
                    <LeftSide>
                        <Color>
                        <Blue/>
                        <Orange/>
                        </Color>
                        <Img src={img2}/>
                    </LeftSide>
                    <RightSide>
                        <Top>PROGRESS TRACKING</Top>
                        <Write1>VIEW PROGRESS & REACH NEW LIMITS</Write1>
                        <Hold>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>
Track workout time and weightlifting</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Set target muscles and body measurements
</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Understand muscle recovery rate</WriteUp>
                            </Cover>
                            <Cover>
                            <Icon><IoIosCheckmark/></Icon>
                            <WriteUp>Set 1RM goals and refresh records</WriteUp>
                            </Cover>
                        </Hold>
                        <Button text="Join Now" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px'/>
                    </RightSide>
                </Holder>
            </Main>
        </Container>
    </div>
  )
}

export default Needs;


const WriteUp = styled.div`
font-family: "DM Sans", sans-serif;
color: #2f373d;
font-weight: 500;
font-size: 22px;
line-height: 41px;
`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(56,183,254);
border-radius: 50%;
color: white;
font-size: 20px;
margin-right: 7px;
height: 20px;
width: 20px;
`
const Cover = styled.div`
display: flex;
/* justify-content: center; */
align-items: center;
margin-top: 10px;
`
const Hold = styled.div`
margin-bottom: 35px;
`
const Write1 = styled.div`
text-transform: uppercase;
color: #2f373d;
font-family: "Barlow Semi Condensed", sans-serif;
font-size: 40px;
font-weight: 700;
line-height: 56px;
margin-bottom: 25px;
width: 450px;
`
const Top = styled.div`
text-transform: uppercase;
color: rgb(138,187,196);
font-family: "Barlow Semi Condensed", sans-serif;
font-size: 17px;
font-weight: 600;
line-height: 20px;
margin-bottom: 25px;
`
const Img = styled.img`
width: 610px;
position: absolute;
margin-left: -30px;
margin-top: -45px;
`
const Orange = styled.div`
height: 390px;
width: 250px;
border-radius: 0px 0px 20px 20px;
background-color: rgb(255,240,236);
`
const Blue = styled.div`
height: 470px;
width: 250px;
border-radius: 0px 0px 20px 20px;
background-color:rgb(37,123,253);
`
const Color = styled.div`
display: flex;
position: absolute;
`
const Write = styled.div`
font-family: Montserrat, sans-serif;
font-size: 40px;
font-weight: 700;
line-height: 56px;
color: #2f373d;
margin-bottom: 35px;
text-transform: uppercase;
`
const RightSide = styled.div`
flex-direction: column;
`
const LeftSide = styled.div`
position: relative;
`
const Holder = styled.div`
margin-top: 65px;
display: flex;
justify-content: space-between;
flex-wrap: wrap-reverse;
`
const Main = styled.div`
width: 92%;
height: 100%;
display: flex;
flex-direction: column;
`
const Container = styled.div`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
margin-top: 90px;
`