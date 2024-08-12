import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="bot-army">
        {army.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleClick={removeFromArmy} dischargeBot={dischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
