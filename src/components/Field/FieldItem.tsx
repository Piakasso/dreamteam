import React from "react";
import { useDrop } from "react-dnd";
import { IPlayer, IPosition } from "../../data/constants";

import * as Styled from "./field.styles";
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
  handleSwitchPlayer: (prevPosition: IPosition, newPosition: IPosition) => void;
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
    handleSwitchPlayer,
  } = props;

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: "player",
    drop: (item: any) => {
      const { id, name, lastName, playerNumber, img, position, isFirst } = item;
      if (isFirst) {
        const player = {
          id,
          name,
          lastName,
          playerNumber,
          img,
          position,
        };

        handleChangePlayersList(player);
        handleChoosePlayer({ newPlayer: player, fieldId: data.fieldId });
      } else {
        handleSwitchPlayer(item, data);
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
      ref={!data.lastName ? drop : null}
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
