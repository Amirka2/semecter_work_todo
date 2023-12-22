import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  height: 50px;
  
  padding: 0 10px;
  
  border: 1px solid black;
  border-radius: 8px;
`;

export const Text = styled.span`
  font-size: 18px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  
  height: 100%;
  
  gap: 8px;
`;

export const CheckBox = styled.input`
  height: 24px;
  
  cursor: pointer;
`;

export const Delete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #fff;
  
  border: none;
  
  cursor: pointer;
`;
