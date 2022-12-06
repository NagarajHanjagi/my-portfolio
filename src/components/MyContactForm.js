import React, { useRef } from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';
import emailjs from '@emailjs/browser';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import contact from '../assets/Images/contact.png';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`
const Spaceman = styled.div`
position: absolute;
top: 30%;
right: -3%;
width: 40vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const Form = styled.div`
    padding: 2rem;
    width: 80%;
    height: 80%;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: -80px;

    form{
        width: 100%;
    height: 100%;
    }
`

const Input = styled.div`
border-bottom: 2px solid aqua;
margin: 30px 0;
width: 100%;

input{
    background: transparent;
    outline: none;
    border: none;
    color: aquamarine;
    font-size: 22px;
    width: 100%;
}
`

const Textarea = styled.div`
    width: 100%;
    border-bottom: 2px solid aqua;
    margin: 30px 0;
    height: 50%;

    textarea{
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    height: 50%;
    color: aquamarine;
    font-size: 22px;
    }
`

const Button = styled.div`
    border-bottom: 2px solid aqua;
    width: 17%;

    button{
        background: transparent;
        border: none;
        outline: none;
        color: aquamarine;
        padding: 0 19px;
    }
`





const AboutPage = () => {



    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rv2zof3',
            'template_gs8w53r',
            form.current,
            'FkdAohuD2gVMKaf2j'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <ThemeProvider theme={DarkTheme}>

            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={contact} alt="spaceman" />
                </Spaceman>
                <Main>

                    <Form>
                        <form className='contact__form' ref={form} onSubmit={sendEmail}>
                            <Input>
                                <input placeholder='Name' type="text" name="user_name" required="required" />
                            </Input>
                            <Input>
                                <input placeholder='Email' type="email" name="user_email" required="required" />
                            </Input>
                            <Textarea>
                                <textarea placeholder='Message ' name="message" style={{ width: '100%', height: '100%' }} />
                            </Textarea>
                            <Button>
                                <button type="submit" value="Send" className="p-text" >Send</button>
                            </Button>
                        </form>
                    </Form>

                </Main>

                <BigTitle text="CONTACT" top="10%" left="5%" />

            </Box>

        </ThemeProvider>

    )
}

export default AboutPage