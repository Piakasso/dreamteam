import React, { useState } from "react";
import { IPlayer, playersList } from "./data/constants";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PlayerList from "./components/PlayerList/PlayerList";
import Field from "./components/Field/Field";
function App() {
  const [team, setTeam] = useState(playersList);
  const handleChangePlayersList = (player: IPlayer) => {
    setTeam((prev) => prev.filter((items) => items.id !== player.id));
  };
  return (
    <div className="App">
      <Header />
      <DndProvider backend={HTML5Backend}>
        <Main>
          <PlayerList team={team} />
          <Field
            team={team}
            handleChangePlayersList={handleChangePlayersList}
          />
        </Main>
      </DndProvider>
    </div>
  );
}

export default App;
