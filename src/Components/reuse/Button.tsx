import React from 'react'
import styled from 'styled-components';

interface iBtn {
  text?: string;
  fs?: string;
  fw?: string;
   bg?: string; 
   cc?: string; 
   hbg?: string; 
   hcc?: string;
   hb?: string;
   w?: string;
   bb?: string;
   b?: string;
}

const Button: React.FC<iBtn> = ({text, fw, bg, cc, hbg, hcc, hb, fs, w, bb, b}) => {
  return (
    <div>
      <Container fw={`${fw}`} bg={`${bg}`} cc={`${cc}`} hbg={`${hbg}`} hcc={`${hcc}`} hb={`${hb}`} fs={`${fs}`} w={`${w}`} bb={`${bb}`} b={`${b}`}>
        {text}
      </Container>
    </div>
  )
}

export default Button;

const Container = styled.div<{fs?: string, fw?: string, bg?: string, cc?: string, hbg?: string, hcc?: string, hb?: string, w?: string, bb?: string, b?: string}>`
display: flex;
justify-content: center;
align-items: center;
font-size: ${({fs})=>fs};
font-weight: ${({fw})=>fw};
background-color: ${({bg})=>bg};
border: ${({b})=>b};
color: ${({cc})=>cc};
width: ${({w})=>w};
height: 40px;
margin-left: 20px;
border-radius: ${({bb})=> bb};
cursor: pointer;
text-transform: uppercase;

:hover{
  background-color: ${({hbg})=>hbg};
  color: ${({hcc})=>hcc};
  border: ${({hb})=>hb};
  transition: all 350ms;
}
`