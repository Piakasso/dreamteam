import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
  IPlayer,
  IPosition,
  playersList,
  positionsList,
} from "./data/constants";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PlayerList from "./components/PlayerList/PlayerList";
import Field from "./components/Field/Field";

const initialState = positionsList;

function App() {
  const [team, setTeam] = useState(playersList);
  const [fieldPlayers, setFieldPlayers] = useState(initialState);
  const handleChangePlayersList = (player: IPlayer) => {
    setTeam((prev) => prev.filter((items) => items.id !== player.id));
  };

  const handleChoosePlayer = ({
    newPlayer,
    fieldId,
  }: {
    newPlayer: IPlayer;
    fieldId: number;
  }) => {
    setFieldPlayers((prev) =>
      prev.map((pos) =>
        pos.fieldId === fieldId ? { ...pos, ...newPlayer } : pos
      )
    );
  };

  const handleDeletePlayer = (deletedPlayer: IPlayer, fieldId: number) => {
    const restoredList = [...team, deletedPlayer];
    setTeam(restoredList.sort((a, b) => a.id - b.id));

    const filteredFieldPlayers = fieldPlayers.map((player) => {
      if (player.fieldId === fieldId) {
        return {
          position: player.position,
          xCoord: player.xCoord,
          yCoord: player.yCoord,
          fieldId: player.fieldId,
        };
      }
      return player;
    });
    setFieldPlayers(filteredFieldPlayers);
  };

  const handleSwitchPlayer = (
    prevPosition: IPosition,
    newPosition: IPosition
  ) => {
    const initialPosition = initialState.find(
      (position) => position.fieldId === prevPosition.fieldId
    );

    setFieldPlayers((prev) =>
      prev.map((pos) => {
        if (pos.fieldId === newPosition.fieldId) {
          return {
            ...newPosition,
            name: prevPosition.name,
            lastName: prevPosition.lastName,
            img: prevPosition.img,
            id: prevPosition.id,
            playerNumber: prevPosition.playerNumber,
          };
        }
        if (pos.fieldId === prevPosition.fieldId) {
          return { ...initialPosition! };
        }
        return pos;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Main>
          <PlayerList team={team} />
          <Field
            handleChangePlayersList={handleChangePlayersList}
            fieldPlayers={fieldPlayers}
            handleChoosePlayer={handleChoosePlayer}
            handleDeletePlayer={handleDeletePlayer}
            handleSwitchPlayer={handleSwitchPlayer}
          />
        </Main>
      </DndProvider>
    </div>
  );
}

export default App;
