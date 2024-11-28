import styled from "styled-components";

export const FieldWrapper = styled.div`
  height: 80vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: green;
    z-index: 0;
    opacity: 0.8;
  }
`;
export const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: red;
  color: white;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  right: 0;
  top: 0;
  cursor: pointer;
`;

export const FieldBg = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  z-index: -1;
`;

export const EmptyPosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  border-radius: 50%;
  opacity: 0.9;
  border: 2px black solid;
  transform: translate(-50%, -50%);
`;

export const ChoosedRole = styled.div`
  position: absolute;
  top: 72%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  font-weight: 500;
  z-index: 3;

  & img {
    width: 90px;
    height: 90px;

    background-color: white;
    border-radius: 50%;
    border: 2px white solid;
  }

  &:hover ${DeleteButton} {
    display: flex;
  }
`;

export const FieldPlayerName = styled.span`
  color: white;
`;
export const FieldPlayerNumber = styled.span`
  color: white;
`;
