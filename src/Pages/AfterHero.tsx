import React from 'react'
import styled from 'styled-components';
import Button from '../Components/reuse/Button';
import img from "../assets/Abs.png"
import img1 from "../assets/back.png"
import img2 from "../assets/backer.png"
import img3 from "../assets/beach people.png"
import img4 from "../assets/ggymphone.png"
import img5 from "../assets/girlhead.png"
import img6 from "../assets/gmuscle.png"
import img7 from "../assets/house.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"    

const AfterHero = () => {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <div>
        <Container>
            <Main>
                <BigTxt>CONNECT WITH OVER 10 MILLION JEFIT MEMBERS</BigTxt>
                <SmallTxt>As the most active workout community, we invite you and your friends to join us and support each other.</SmallTxt>
                <Slider {...settings}>
                <ImgHolder><Img src={img}/></ImgHolder>
                <ImgHolder><Img src={img1}/></ImgHolder>
                <ImgHolder><Img src={img2}/></ImgHolder>
                <ImgHolder><Img src={img3}/></ImgHolder>
                <ImgHolder><Img src={img4}/></ImgHolder>
                <ImgHolder><Img src={img5}/></ImgHolder>
                <ImgHolder><Img src={img6}/></ImgHolder>
                <ImgHolder><Img src={img7}/></ImgHolder>
                </Slider>
                <ButtonHolder>
                <Button text="Trending Topics" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='200px'/>
                <Button text="Join Now" fw="650" bg="rgb(56,183,254)" cc="white" hbg="white" hcc="rgb(56,183,254)" hb="2px solid rgb(56,183,254)" fs="21px" bb='20px' w='170px'/>
                </ButtonHolder>
            </Main>
        </Container>
    </div>
  )
}

export default AfterHero;

const Img = styled.img`
width: 170px;
height: 170px;
object-fit: cover;
border-radius: 10px;
margin-left: 20px;
`
const ImgHolder = styled.div`
display: flex;
`
const ButtonHolder = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`
const SmallTxt = styled.div`
font-family:    "DM Sans", sans-serif;
font-weight: 500;
line-height: 29px;
color: #2f373d;
font-size: 24px;
text-align: center;
margin-bottom: 30px;
`
const BigTxt = styled.div`
font-family: Montserrat, sans-serif;
font-weight: 700;
line-height: 56px;
color: #2f373d;
font-size: 40px;
margin-bottom: 25px;
`
const Main = styled.div`
width: 92%;
height: 100%;
flex-direction: column;
`
const Container = styled.div`
height: 400px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
`