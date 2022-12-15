require('dotenv').config();
require('./config/database');

const Team = require('./models/team');
const Driver = require('./models/driver');

(async function() {

  await Team.deleteMany({});
  const Teams = await Team.create([
    {name: 'Red Bull Racing', points: 759, teamLogoUrl:"https://i.imgur.com/ipgvxj2.jpg", sortOrder: -759},
    {name: 'Ferrari', points: 554, teamLogoUrl:"https://i.imgur.com/S13pSe5.jpg", sortOrder: -554},
    {name: 'Mercedes', points: 515, teamLogoUrl:"https://i.imgur.com/ozoTJwe.jpg", sortOrder: -515},
    {name: 'Alpine', points: 173, teamLogoUrl:"https://i.imgur.com/dK2ugYO.jpg", sortOrder: -173},
    {name: 'McLaren', points: 159, teamLogoUrl:"https://i.imgur.com/MH7CKbz.jpg", sortOrder: -159},
    {name: 'Alfa Romeo', points: 55, teamLogoUrl:"https://i.imgur.com/XAjRrZi.jpg", sortOrder: -55},
    {name: 'Aston Martin', points: 55, teamLogoUrl:"https://i.imgur.com/HVxIBsE.jpg", sortOrder: -50},
    {name: 'Hass F1 Team', points: 37, teamLogoUrl:"https://i.imgur.com/UxcH6fW.jpg", sortOrder: -37},
    {name: 'AlphaTauri', points: 35, teamLogoUrl:"https://i.imgur.com/Mcc0dLy.jpg", sortOrder: -30},
    {name: 'Williams', points: 8, teamLogoUrl:"https://i.imgur.com/8zYp3cb.jpg", sortOrder: -8},
  ]);


  await Driver.deleteMany({});
  const drivers = await Driver.create([
    {name: "Lewis Hamilton", age: 37, nationality: "British", team: Teams[2], profileUrl: "https://i.imgur.com/FD0rbIh.jpg"},
    {name: "George Russell", age: 24, nationality: "British", team: Teams[2], profileUrl: "https://i.imgur.com/hJCGx4A.jpg"},
    {name: "Max Verstappen", age: 25, nationality: "Belgian-Dutch", team: Teams[0], profileUrl: "https://i.imgur.com/F0dEVFY.jpg"},
    {name: "Sergio Pérez", age: 32, nationality: "Mexican", team: Teams[0], profileUrl: "https://i.imgur.com/NF403sk.jpg"},
    {name: "Charles Leclerc", age: 25, nationality: "Monacan", team: Teams[1], profileUrl: "https://i.imgur.com/9eUd5ge.jpg"},
    {name: "Carlos Sainz", age: 28, nationality: "Spanish", team: Teams[1], profileUrl: "https://i.imgur.com/NL2SiHp.jpg"},
    {name: "Daniel Ricciardo", age: 33, nationality: "Italian-Australian", team: Teams[4], profileUrl: "https://i.imgur.com/Bszmd3P.jpg"},
    {name: "Lando Norris", age: 23, nationality: "Belgian-British", team: Teams[4], profileUrl: "https://i.imgur.com/F1YDEI0.jpg"},
    {name: "Fernando Alonso", age: 41, nationality: "Spanish", team: Teams[3], profileUrl: "https://i.imgur.com/iAndrCO.jpg"},
    {name: "Esteban Ocon", age: 26, nationality: "French", team: Teams[3], profileUrl: "https://i.imgur.com/1rpJsFM.jpg"},
    {name: "Pierre Gasly", age: 26, nationality: "French", team: Teams[8], profileUrl: "https://i.imgur.com/mfTSszz.jpg"},
    {name: "Yuki Tsunoda", age: 22, nationality: "Japanese", team: Teams[8], profileUrl: "https://i.imgur.com/8forZPv.jpg"},
    {name: "Sebastian Vettel", age: 35, nationality: "German", team: Teams[6], profileUrl: "https://i.imgur.com/chMxOQc.jpg"},
    {name: "Lance Stroll", age: 24, nationality: "Canadian–Belgian", team: Teams[6], profileUrl: "https://i.imgur.com/PENjcqu.jpg"},
    {name: "Nicholas Latifi", age: 27, nationality: "Canadian", team: Teams[9], profileUrl: "https://i.imgur.com/EYtaK0Z.jpg"},
    {name: "Alex Albon", age: 26, nationality: "Thai-British", team: Teams[9], profileUrl: "https://i.imgur.com/GJM691q.jpg"},
    {name: "Zhou Guanyu", age: 23, nationality: "Chinese", team: Teams[5], profileUrl: "https://i.imgur.com/R5AxXiR.jpg"},
    {name: "Valtteri Bottas", age: 33, nationality: "Finnish", team: Teams[5], profileUrl: "https://i.imgur.com/1ujZef5.jpg"},
    {name: "Kevin Magnussen", age: 30, nationality: "Danish", team: Teams[7], profileUrl: "https://i.imgur.com/eKbE3PJ.jpg"},
    {name: "Mick Schumacher", age: 23, nationality: "German", team: Teams[7], profileUrl: "https://i.imgur.com/Ve6u6Xt.jpg"},
  ]);

  console.log(drivers);

  process.exit();

})();