import styled from 'styled-components'
import heroes from '../../assets/logo_png.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background: url(${heroes}) no-repeat;
  @media (max-width: 800px) {
    //height: 100%;
    background-size: 100%;
  }

`

export const Main = styled.div`
  @media (min-width: 1000px) {
    width: 100%;
    max-width: 35rem;
    margin: 0;
  }

  @media (max-width: 800px) {
    position: absolute;
    width: 356px;
    height: 357px;
    left: 32px;
    top: 139px;
    background: #FAF5FF;
    border-radius: 8px;
  }
`

export const Retangulo = styled.div`
  position: absolute;
  width: 765px;
  height: 100%;
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
  @media (max-width: 800px) {
    position: absolute;
    width: 414px;
    height: 100%;
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);
    position: absolute;
    width: 414px;
    height: 353px;
    top: 383px;
    background: #130525;
  }
`

export const Logo = styled.img`
  max-height: 100%;
  height: 100%;
`

export const Title = styled.h1`
  position: absolute;
  width: 231px;
  height: 96px;
  left: 877px;
  top: 136px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #383E71;
  @media (max-width: 800px) {
    position: absolute;
    width: 139px;
    height: 64px;
    left: 118px;
    top: 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #383E71;
  }
`

export const Label = styled.label`
  position: relative;
  width: 72px;
  left: 877px;
  height: 14px;
  margin-bottom: 1rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  display: flex;
  align-items: center;
  color: #383E71;
  @media (max-width: 800px) {
    position: relative;
    width: 72px;
    height: 14px;
    left: 50px;
    top: 136px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 48px;
    display: flex;
    align-items: center;
    color: #383E71;

  }
`

export const SubTitle = styled.h2`
  position: absolute;
  width: 222px;
  height: 40px;
  left: 877px;
  top: 248px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989FDB;
  @media (max-width: 800px) {
    position: absolute;
    width: 255px;
    height: 20px;
    left: 50px;
    top: 104px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #989FDB;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;

`

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 1000px) {
    justify-content: flex-start;
  }
`
export const RegisterLabel = styled.span`
  position: relative;
  width: 212px;
  height: 40px;
  left: 899px;
  top: 250px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #989FDB;

  @media (max-width: 800px) {
    position: absolute;
    width: 212px;
    height: 40px;
    left: 81px;
    top: 434px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;

  }
`
