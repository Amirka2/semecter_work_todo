import styled from "styled-components";

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

export const Description = styled.textarea`
  width: 100%;
  min-height: 70px;
  
  border: 1px solid lightgray;
  border-radius: 8px;
  padding: 10px;
  
  resize: none;
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: 8px;
`;
