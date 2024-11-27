import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./field.styles";
import { useDrag, useDrop } from "react-dnd";
import { IPlayer, IPosition } from "../../data/constants";

interface IFieldItem {
  handleChangePlayersList: (item: IPlayer) => void;
  handleChangeFieldPlayers: ({
    newPlayer,
    fieldId,
    prevFieldId,
  }: {
    newPlayer?: IPlayer;
    prevFieldId?: number;
    fieldId?: number;
  }) => void;
  id?: number;
  data: IPosition;
}

interface IState extends IPlayer {
  isFirst?: boolean;
}

const FieldItem = ({
  handleChangePlayersList,
  handleChangeFieldPlayers,
  data,
}: IFieldItem) => {
  const [{ isOver, canDrop, hz, tr }, drop] = useDrop(() => ({
    accept: "player",

    drop: (item: IState) => {
      if (item.isFirst) {
        handleChangePlayersList(item);
        handleChangeFieldPlayers({ newPlayer: item, fieldId: data.fieldId });
      } else {
        console.log(item, "new");
        console.log(data, "data");
        // handleChangeFieldPlayers({
        //   newPlayer: item,
        //   fieldId: data.fieldId,
        // });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      hz: monitor.getItem(),
      tr: monitor.getHandlerId(),
    }),
  }));
  //   console.log("data is changed", data);
  const [{ isDragging, info }, drag] = useDrag(() => ({
    type: "player",
    item: data,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      info: monitor.getDropResult(),
    }),
    end: (_, monitor) => {
      if (monitor.didDrop()) {
      }
    },
  }));

  useEffect(() => {
    console.log(tr);
  }, [tr]);

  return !data.lastName ? (
    <Styled.EmptyPosition
      style={{
        left: `${data.xCoord}%`,
        top: `${data.yCoord}%`,
      }}
      ref={drop}
    >
      {data.fieldId}
    </Styled.EmptyPosition>
  ) : (
    <Styled.ChoosedRole
      style={{
        left: `${data.xCoord}%`,
        top: `${data.yCoord}%`,
      }}
      ref={drag}
    >
      <img src={data.img} alt={data.lastName} />
      <Styled.FieldPlayerName>
        {data.name ? `${data.name[0]}.${data.lastName}` : data.lastName}
      </Styled.FieldPlayerName>
      <Styled.FieldPlayerNumber>{data.playerNumber}</Styled.FieldPlayerNumber>
    </Styled.ChoosedRole>
  );
};

export default FieldItem;
