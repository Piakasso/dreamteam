import React from "react";
import * as Styled from "./field.styles";
import { useDrag, useDrop } from "react-dnd";
import { IPlayer, IPosition } from "../../data/constants";
import DraggablePlayer from "./DraggablePlayer";

interface IFieldItem {
  handleChangePlayersList: (item: IPlayer) => void;
  handleChoosePlayer: ({
    newPlayer,
    fieldId,
  }: {
    newPlayer: IPlayer;
    fieldId: number;
  }) => void;
  id?: number;
  data: IPosition;
  handleDeletePlayer: (player: IPlayer, fieldId: number) => void;
}

interface IState extends IPlayer {
  isFirst?: boolean;
}

const FieldItem = (props: IFieldItem) => {
  const {
    handleChangePlayersList,
    handleChoosePlayer,
    data,
    handleDeletePlayer,
  } = props;

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: "player",

    drop: (item: IState) => {
      if (item.isFirst) {
        handleChangePlayersList(item);
        handleChoosePlayer({ newPlayer: item, fieldId: data.fieldId });
      } else {
      }
    },
    canDrop: (item: IState) => {
      return data.position === item.position;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleClickDelete = () => {
    handleDeletePlayer(
      {
        lastName: data.lastName || "",
        name: data.name || "",
        id: data.id || 0,
        img: data.img || "",
        playerNumber: data.playerNumber || 0,
        position: data.position,
      },
      data.fieldId
    );
  };

  return (
    <Styled.EmptyPosition
      style={{
        left: `${data.xCoord}%`,
        top: `${data.yCoord}%`,
        backgroundColor: canDrop ? "grey" : "",
      }}
      ref={drop}
    >
      {!data.lastName ? (
        data.fieldId
      ) : (
        <DraggablePlayer data={data} handleClickDelete={handleClickDelete} />
      )}
    </Styled.EmptyPosition>
  );
};

export default FieldItem;
