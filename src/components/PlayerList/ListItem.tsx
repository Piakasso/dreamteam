import React, { forwardRef } from "react";
import { useDrag } from "react-dnd";

import * as Styled from "./playerlist.styles";

export interface IListItem {
  name: string;
  lastName: string;
  id: number;
  playerNumber: number;
  img: string;
  position: string;
}

const ListItem = forwardRef<HTMLDivElement, IListItem>(
  ({ name, lastName, id, playerNumber, img, position }: IListItem, ref) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: "player",
      item: { id, name, lastName, playerNumber, img, position, isFirst: true },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return (
      <Styled.ListItemEl
        ref={drag}
        style={{
          opacity: isDragging ? 0.7 : 1,
        }}
      >
        <Styled.DecorStripe position={position} />
        <Styled.ItemNumber>{playerNumber}</Styled.ItemNumber>
        <img src={img} alt={lastName} />
        <Styled.ItemName>{`${name} ${lastName}`}</Styled.ItemName>
      </Styled.ListItemEl>
    );
  }
);

export default ListItem;
