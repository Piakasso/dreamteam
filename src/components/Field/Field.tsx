import React from "react";
import { IPlayer, IPosition } from "../../data/constants";
import field from "../../assets/images/field.jpg";

import * as Styled from "./field.styles";
import FieldItem from "./FieldItem";

interface IField {
  handleChangePlayersList: (item: IPlayer) => void;
  fieldPlayers: IPosition[];
  handleChoosePlayer: ({
    newPlayer,
    fieldId,
  }: {
    newPlayer: IPlayer;
    fieldId: number;
  }) => void;
  handleDeletePlayer: (player: IPlayer, fieldId: number) => void;
  handleSwitchPlayer: (prevPosition: IPosition, newPosition: IPosition) => void;
}

const Field = ({
  handleChangePlayersList,
  fieldPlayers,
  handleChoosePlayer,
  handleDeletePlayer,
  handleSwitchPlayer,
}: IField) => {
  return (
    <Styled.FieldWrapper>
      <Styled.FieldBg src={field} />
      {fieldPlayers.map((pos, i) => (
        <FieldItem
          key={pos.fieldId + i}
          data={{ ...pos }}
          handleChoosePlayer={handleChoosePlayer}
          handleChangePlayersList={handleChangePlayersList}
          handleDeletePlayer={handleDeletePlayer}
          handleSwitchPlayer={handleSwitchPlayer}
        />
      ))}
    </Styled.FieldWrapper>
  );
};

export default Field;
