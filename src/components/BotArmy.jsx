const BotArmy = ({ myBots, releaseBot }) => (
  <div className="collection">
    {myBots.map(({ id, avatar_url, name, bot_class, catchphrase, damage, armor, health }) => (
      <div 
        key={id} 
        onClick={() => releaseBot(id)} 
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
      </div>
    ))}
  </div>
);

export default BotArmy;
