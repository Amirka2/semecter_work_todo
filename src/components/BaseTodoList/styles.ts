import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 500px;
`;

export const LabelWrapper = styled.div<{
  color: string
}>`
  display: inline-flex;
  width: fit-content;
  
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 8px;
  
  background-color: ${({color}) => color};
`;

export const Caption = styled.span`
  font-size: 13px;
  font-style: italic;
`;

export const ItemsList = styled.ul`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemsListItem = styled.li`
  list-style-type: none;
`;
