import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import './App.css'; // Optional: if you have App-specific styles

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((armyBot) => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((armyBot) => armyBot.id !== bot.id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== id));
        setArmy(army.filter((bot) => bot.id !== id));
      });
  };

  return (
    <div>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default App;
