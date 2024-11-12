import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 80px;
  color: #b83f45;
  font-weight: 200;
`;

export const Input = styled.input`

  margin-top: 20px;
  padding: 16px 16px 16px 60px;
  height: 65px;
  width: 550px;
  font-style: oblique;
  font-size: 24px;
  border: 1px solid #ffffff;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
  }
`;
export const Li = styled.li`
  height: 58.8px;
  width: 550px;
  font-size: 24px;
  font-weight: 400;
  color: #484848;
  display: flex;
  border: 0.1px solid #484848;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
`;

export const InputСircle = styled.div`
  display: flex;
  gap: 20px;
`;
export const InputСircle1 = styled.div`
  display: flex;
  gap: 20px;
  text-decoration: line-through;
`;
export const Crug = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 0.4px solid #484848;
`;
export const Crug1 = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 0.4px solid green;
  background: url(https://javascript.ru/forum/images/icons/icon10.gif) center
    no-repeat;
`;
export const FooterSection = styled.div`
  padding-left: 20px;
  font-size: 15px;
  height: 50px;
  width: 550px;
  border: 0.4px solid #484848;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FooterButton = styled.div`
  display: flex;

`;
export const Button = styled.button`
  border: none;
  padding: 5px;
`;
export const Button1 = styled.button`
  border: 1px solid red;
  padding: 5px;
`;
