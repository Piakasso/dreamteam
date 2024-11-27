type POSITION = "GK" | "DF" | "MF" | "FW";

export interface IPlayer {
  name: string;
  lastName: string;
  position: POSITION;
  id: number;
  img: string;
  playerNumber: number;
}

export const playersList: IPlayer[] = [
  {
    name: "Iker",
    lastName: "Casillas",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/5479.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=9f02a3b5bce563c289568578b62c47d1",
    id: 1,
    position: "GK",
    playerNumber: 1,
  },
  {
    name: "Gianluigi",
    lastName: "Buffon",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/1179.png?fm=png&ixlib=java-2.1.0&verzion=3&w=512&s=c389a7cfa4ded4388612a602e44cb4a6",
    id: 2,
    position: "GK",
    playerNumber: 77,
  },
  {
    name: "Roberto",
    lastName: "Carlos",
    img: "https://cdn3.futbin.com/content/fifa24/img/players/238430.png?fm=png&ixlib=java-2.1.0&w=480&s=7f80d399e32666a522d8be7dd7609edd",
    id: 3,
    position: "DF",
    playerNumber: 3,
  },
  {
    name: "Fabio",
    lastName: "Cannavaro",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/1183.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=1205be0747f38acd442267e1d85d69af",
    id: 4,
    position: "DF",
    playerNumber: 5,
  },
  {
    name: "Paolo",
    lastName: "Maldini",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/238439.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=769d0633246ed1d4ca88d93484231253",
    id: 5,
    position: "DF",
    playerNumber: 33,
  },
  {
    name: "Carlos",
    lastName: "Puyol",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/238384.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=f535a37031ccbc0cd4e6497ce0034df8",
    id: 6,
    position: "DF",
    playerNumber: 5,
  },
  {
    name: "Alessandro",
    lastName: "Nesta",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/1088.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=fa58b27d3d1c0fc61e59c853471fbb6f",
    id: 7,
    position: "DF",
    playerNumber: 14,
  },
  {
    name: "Fernando",
    lastName: "Hierro",
    img: "https://cdn3.futbin.com/content/fifa24/img/players/161840.png?fm=png&ixlib=java-2.1.0&w=480&s=3e6808ebd5116b188ab47953f3d3f8dc",
    id: 8,
    position: "DF",
    playerNumber: 4,
  },
  {
    name: "Rio",
    lastName: "Ferdinand",
    img: "https://cdn3.futbin.com/content/fifa24/img/players/7289.png?fm=png&ixlib=java-2.1.0&w=480&s=aded259d20276f0f9fd7f23d23d32a44",
    id: 9,
    position: "DF",
    playerNumber: 29,
  },
  {
    name: "David",
    lastName: "Beckham",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/250.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=1a47d45aafeb61448b1fd919042261bf",
    id: 10,
    position: "MF",
    playerNumber: 7,
  },
  {
    name: "Frank",
    lastName: "Lampard",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/5471.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=d2d9e4c2210558f1776e02e0ca0c89d5",
    id: 11,
    position: "MF",
    playerNumber: 8,
  },
  {
    name: "",
    lastName: "Ronaldinho",
    img: "https://cdn3.futbin.com/content/fifa24/img/players/28130.png?fm=png&ixlib=java-2.1.0&w=480&s=63516313e16c64e2c4b55b78847d92e9",
    id: 12,
    position: "MF",
    playerNumber: 80,
  },
  {
    name: "Steven",
    lastName: "Gerrard",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/13743.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=d3d06bdf6d8df6cfef1e710312541afd",
    id: 13,
    position: "MF",
    playerNumber: 8,
  },
  {
    name: "Roberto",
    lastName: "Baggio",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/1114.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=1092afe6d466c9b0ac59af2aa585a7f2",
    id: 14,
    position: "MF",
    playerNumber: 18,
  },
  {
    name: "Franck",
    lastName: "Ribery",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/156616.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=d0a972a6f15ef2d2bf5291c5a8dde9b1",
    id: 15,
    position: "MF",
    playerNumber: 77,
  },
  {
    name: "Zinedine",
    lastName: "Zidane",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/1397.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=fc7c0219a33aa6808230afd266a838a6",
    id: 16,
    position: "MF",
    playerNumber: 21,
  },
  {
    name: "Pavel",
    lastName: "Nedved",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/6235.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=0f89391d0ed189dc88b8a1daf334d095",
    id: 17,
    position: "MF",
    playerNumber: 11,
  },
  {
    name: "",
    lastName: "Kaká",
    img: "https://cdn3.futbin.com/content/fifa24/img/players/138449.png?fm=png&ixlib=java-2.1.0&w=480&s=d49cf7a228e36107494c7f66d01776ed",
    id: 18,
    position: "MF",
    playerNumber: 22,
  },
  {
    name: "Nazário",
    lastName: "Ronaldo",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/37576.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=7befbc0c3f5396c252a9f3494c3f9121",
    id: 19,
    position: "FW",
    playerNumber: 9,
  },
  {
    name: "Robin",
    lastName: "Van Persie",
    img: "https://cdn3.futbin.com/content/fifa24/img/players/262112.png?fm=png&ixlib=java-2.1.0&w=480&s=72f366140ee62f96045df35ab94ca352",
    id: 20,
    position: "FW",
    playerNumber: 32,
  },
  {
    name: "Thierry",
    lastName: "Henry",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/1625.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=86c7333398af14f2dc016d9094ad6d04",
    id: 21,
    position: "FW",
    playerNumber: 14,
  },
  {
    name: "Henrick",
    lastName: "Larsson",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/239261.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=dc47ff2d0be65cb9b41ab8f1ecd5092f",
    id: 22,
    position: "FW",
    playerNumber: 17,
  },
  {
    name: "Fernando",
    lastName: "Torres",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/49369.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=24321d4164a2a0c1d7df9e6051c63beb",
    id: 23,
    position: "FW",
    playerNumber: 99,
  },
  {
    name: "Alessandro",
    lastName: "Del Piero",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/238382.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=d184b6561a3b25db2e64dd71c3488aef",
    id: 24,
    position: "FW",
    playerNumber: 10,
  },
  {
    name: "Dennis",
    lastName: "Bergkamp",
    img: "https://cdn3.futbin.com/content/fifa25/img/players/238388.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=4cdf30501d4d6c74b92cea4a89141c8f",
    id: 25,
    position: "FW",
    playerNumber: 15,
  },
];

export interface IPosition extends Partial<Omit<IPlayer, "position">> {
  position: POSITION;
  xCoord: number;
  yCoord: number;
  fieldId: number;
}

export const positionsList: IPosition[] = [
  {
    position: "GK",
    xCoord: 50,
    yCoord: 90,
    fieldId: 1,
  },

  {
    position: "DF",
    xCoord: 90,
    yCoord: 75,
    fieldId: 2,
  },
  {
    position: "DF",
    xCoord: 60,
    yCoord: 75,
    fieldId: 3,
  },
  {
    position: "DF",
    xCoord: 35,
    yCoord: 75,
    fieldId: 4,
  },
  {
    position: "DF",
    xCoord: 10,
    yCoord: 75,
    fieldId: 5,
  },

  {
    position: "MF",
    xCoord: 75,
    yCoord: 50,
    fieldId: 6,
  },
  {
    position: "MF",
    xCoord: 50,
    yCoord: 50,
    fieldId: 7,
  },
  {
    position: "MF",
    xCoord: 25,
    yCoord: 50,
    fieldId: 8,
  },
  {
    position: "FW",
    xCoord: 75,
    yCoord: 17,
    fieldId: 9,
  },

  {
    position: "FW",
    xCoord: 50,
    yCoord: 17,
    fieldId: 10,
  },
  {
    position: "FW",
    xCoord: 25,
    yCoord: 17,
    fieldId: 11,
  },
];
