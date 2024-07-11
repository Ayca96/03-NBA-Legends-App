
import './App.css';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import PlayerCard from './components/PlayerCard';
import {data} from "./helper/data";


function App() {
  return (
    <div>
     <Header/>
     <CardContainer veri={data}/>
     {/* <PlayerCard datei={data}/> */}
    </div>
  );
}

export default App;
