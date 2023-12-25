import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  width: 100%;
  padding: 10px;
  
  border: 3px solid lightgray;
  border-radius: 8px;
`;

const Row = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Header = styled(Row)``;
export const Footer = styled(Row)``;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Text = styled.span`
  display: block;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  min-height: 70px;
  padding: 5px;

  border: 1px solid lightgray;
  border-radius: 8px;
`;
