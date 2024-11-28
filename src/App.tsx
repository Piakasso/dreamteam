import React, { useState } from "react";
import { IPlayer, playersList, positionsList } from "./data/constants";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PlayerList from "./components/PlayerList/PlayerList";
import Field from "./components/Field/Field";

function App() {
  const [team, setTeam] = useState(playersList.sort((a, b) => a.id - b.id));
  const [fieldPlayers, setFieldPlayers] = useState(positionsList);
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

  const handleSwitchPlayer = (fieldId: number) => {};

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
          />
        </Main>
      </DndProvider>
    </div>
  );
}

export default App;
