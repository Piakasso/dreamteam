import React from "react";
import * as Styled from "./field.styles";
import field from "../../assets/images/field.jpg";
import { IPlayer, IPosition } from "../../data/constants";
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
}

const Field = ({
  handleChangePlayersList,
  fieldPlayers,
  handleChoosePlayer,
  handleDeletePlayer,
}: IField) => {
  return (
    <Styled.FieldWrapper>
      <Styled.FieldBg src={field} />
      {fieldPlayers.map((pos) => (
        <FieldItem
          key={pos.fieldId}
          data={{ ...pos }}
          handleChoosePlayer={handleChoosePlayer}
          handleChangePlayersList={handleChangePlayersList}
          handleDeletePlayer={handleDeletePlayer}
        />
      ))}
    </Styled.FieldWrapper>
  );
};

export default Field;
