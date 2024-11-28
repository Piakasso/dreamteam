import React from "react";
import ListItem from "./ListItem";
import { PlayerListEl } from "./playerlist.styles";
import { IPlayer } from "../../data/constants";

interface IPlayerlist {
  team: IPlayer[];
}
const PlayerList = ({ team }: IPlayerlist) => {
  return (
    <PlayerListEl>
      {team.map((player) => (
        <ListItem {...player} key={player.id} />
      ))}
    </PlayerListEl>
  );
};

export default PlayerList;
