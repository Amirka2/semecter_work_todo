import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  max-width: 800px;
  min-height: 50px;
  
  padding: 5px 10px;
  
  border: 1px solid lightgray;
  border-radius: 8px;
  
  &:hover {
    border: 1px solid black;  
  }
`;

export const Text = styled.p`
  max-height: 100px;
  max-width: 80%;

  overflow-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 1.2em;
  white-space: nowrap;
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

export const OkWrapper = styled.div`
  cursor: pointer;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  gap: 8px;
`;

export const TextWrapper = styled.div`
  width: 100%;
`;
