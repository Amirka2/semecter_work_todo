import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  width: 400px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: relative;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  
  background-color: #fff;
  
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  z-index: 1000;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  
  padding-top: 10px;
`;
