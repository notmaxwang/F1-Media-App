import { useEffect } from 'react';
import {useState} from 'react';
import RaceList from '../../components/RaceList/RaceList';
import * as raceAPI from '../../utilities/webdata-api';
import './RacePage.css';

export default function RacePage() {

  const [raceData, setRaceData] = useState([]);

  useEffect(function() {
    async function getRaceData() {
      try {
        const storeRaces = await raceAPI.getRaceResults();
        setRaceData(storeRaces);
      } catch(err) {
        console.log(err);
      }
      
    }
    getRaceData();
  }, []);

  if(raceData.length === 0) return null;

  return(
    <>
      <h1>Race Info (2022 Season)</h1>
      <div><RaceList raceData={raceData}/></div>
    </>
  );
}