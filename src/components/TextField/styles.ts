import styled from 'styled-components';

interface InputProps {
  border?: string;
}

const Input = styled.input<InputProps>`
    border: ${props => props.border || ''};
    width: 256px;
    height: 48px;
    left: 877px;
    position: relative;
    margin-bottom: 18px;
    background: #FAF5FF;
    color: #41414D;
    font-size: 1.8rem;
    padding: 2.4rem 1.8rem;
    border: 1px solid #989FDB;
    box-sizing: border-box;
    border-radius: 8px;
    ::placeholder {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 48px;
      display: flex;
      align-items: center;
      color: #989FDB;
    }
    @media (max-width: 800px) {
      position: relative;
      width: 256px;
      height: 48px;
      left: 50px;
      top: 136px;
      border: 1px solid #989FDB;
      box-sizing: border-box;
      border-radius: 8px;
    }
`;

export default Input;
