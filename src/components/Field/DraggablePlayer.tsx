import React from "react";
import * as Styled from "./field.styles";
import { IPosition } from "../../data/constants";
import { useDrag } from "react-dnd";

interface IDraggablePlayer {
  data: IPosition;
  handleClickDelete: () => void;
}

const DraggablePlayer = ({ data, handleClickDelete }: IDraggablePlayer) => {
  const [{}, drag] = useDrag(() => ({
    type: "player",
    item: { ...data },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      info: monitor.getItem(),
    }),
    canDrag(monitor) {
      return !!data;
    },
    end: (_, monitor) => {
      if (monitor.didDrop()) {
      }
    },
  }));
  return (
    <Styled.ChoosedRole ref={drag}>
      <img src={data.img} alt={data.lastName} />
      <Styled.FieldPlayerName>
        {data.name ? `${data.name[0]}.${data.lastName}` : data.lastName}
      </Styled.FieldPlayerName>
      <Styled.FieldPlayerNumber>{data.playerNumber}</Styled.FieldPlayerNumber>
      <Styled.DeleteButton onClick={handleClickDelete}>x</Styled.DeleteButton>
    </Styled.ChoosedRole>
  );
};

export default DraggablePlayer;
