import React, { useEffect, useState } from "react";
import * as Styled from "./field.styles";
import field from "../../assets/images/field.jpg";
import { IPlayer, IPosition, positionsList } from "../../data/constants";
import FieldItem from "./FieldItem";

interface IField {
  team: IPlayer[];
  handleChangePlayersList: (item: IPlayer) => void;
}

const initialState = positionsList;

const Field = ({ team, handleChangePlayersList }: IField) => {
  const [fieldPlayers, setFieldPlayers] = useState(initialState);
  const handleChangeFieldPlayers = ({
    newPlayer,
    fieldId,
    prevFieldId,
  }: {
    newPlayer?: IPlayer;
    prevFieldId?: number;
    fieldId?: number;
  }) => {
    let updatedFieldPlayers = [...fieldPlayers];

    // if (prevFieldId) {
    //   updatedFieldPlayers = updatedFieldPlayers.filter(
    //     (player) => player.fieldId !== prevFieldId
    //   );
    // }

    if (newPlayer && fieldId) {
      console.log(newPlayer, fieldId);
      updatedFieldPlayers = updatedFieldPlayers.map((player) => {
        if (player.fieldId === fieldId) {
          return { ...player, ...newPlayer };
        }
        return player;
      });
    }
    console.log(updatedFieldPlayers);
    setFieldPlayers(updatedFieldPlayers);
  };

  return (
    <Styled.FieldWrapper>
      <Styled.FieldBg src={field} />
      {fieldPlayers.map((pos) => (
        <FieldItem
          key={pos.xCoord + pos.yCoord}
          data={{ ...pos }}
          handleChangeFieldPlayers={handleChangeFieldPlayers}
          handleChangePlayersList={handleChangePlayersList}
        />
      ))}
    </Styled.FieldWrapper>
  );
};

export default Field;
