import { useState } from 'react';

const BotCollection = ({ data, dischargeBot, enlistBot }) => {
  const deleteBot = async (botId) => {
    try {
      await fetch(`http://localhost:3000/bots/${botId}`, { method: 'DELETE' });
      dischargeBot(botId);
    } catch (error) {
      console.error('Failed to delete the bot:', error);
    }
  };

  return (
    <div className="collection">
      {data.map(({ id, avatar_url, name, bot_class, catchphrase, damage, armor, health }) => (
        <div
          key={id}
          onClick={() => enlistBot({ id, avatar_url, name, bot_class, catchphrase, damage, armor, health })}
          className="bot-card"
        >
          <img src={avatar_url} alt={name} />
          <p>{name}</p>
          <p>{bot_class}</p>
          <small>{catchphrase}</small>
          <div>
            <div>Damage: {damage}</div>
            <div>Armor: {armor}</div>
            <div>Health: {health}</div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteBot(id);
            }}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
