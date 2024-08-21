import { useEffect, useState } from "react";
import "./App.css";
import BotCollection from "./components/BotCollection";
import BotArmy from "./components/BotArmy";

function App() {
  const [data, setData] = useState([]);
  const [myBots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const dischargeBot = (id) => {
    releaseBot(id); // This should be defined to handle the removal
    console.log("Remove from db");
  };

  const enlistBot = (bot) => {
    setBots((prevBots) => {
      return prevBots.find((b) => b.id === bot.id)
        ? prevBots
        : [...prevBots, bot];
    });
  };

  const releaseBot = (id) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== id));
    console.log("Release from army");
  };

  return (
    <main>
      <h1>My Bot Army</h1>
      <BotArmy myBots={myBots} releaseBot={releaseBot} />
      <h1>Bot Collection</h1>
      <BotCollection
        data={data}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </main>
  );
}

export default App;
