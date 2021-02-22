import styled, { css } from 'styled-components'

export const Button = styled.button<{ secondary: boolean }>`
  width: 100%;
  height: 48px;
  color: #F0F0F5;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  left: 877px;
  position: relative;
  font-size: 16px;
  line-height: 20px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  transition: background 200ms;

  ${props => props.secondary && css`
    color: #41414D;
    background: none;
    border: .25rem solid #DCDCE6;

  `}

  @media (max-width: 800px) {
    position: absolute;
    width: 168px;
    height: 48px;
    left: 103px;
    top: 333px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: none;
    border-radius: 8px;
  }
`
