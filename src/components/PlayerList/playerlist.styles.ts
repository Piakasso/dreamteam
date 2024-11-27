import styled from "styled-components";

export const PlayerListEl = styled.ul`
  height: 80vh;
  overflow-y: auto;
  padding-right: 40px;
`;

export const ListItemEl = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 60px;
  cursor: pointer;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const ItemNumber = styled.div`
  font-weight: 700;
  width: 20px;
`;

export const DecorStripe = styled.div<{ position: string }>`
  width: 5px;
  height: 55px;
  background-color: ${({ position }) => {
    switch (position) {
      case "GK":
        return "black";
      case "DF":
        return "red";
      case "MF":
        return "green";
      default:
        return "blue";
    }
  }};
`;

export const ItemName = styled.div`
  flex: 1;
`;
