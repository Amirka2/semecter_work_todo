import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 20px;
  
  width: 100%;
  
  padding: 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  
  font-size: 18px;
  
  padding: 0 10px;
  border-radius: 8px;
`;

export const AddButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: 20px;
  
  background-color: #fff;
  border: none;

  cursor: pointer;
`;
