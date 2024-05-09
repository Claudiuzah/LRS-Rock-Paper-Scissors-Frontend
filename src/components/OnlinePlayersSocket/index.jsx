import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketComponent = () => {
  // State to hold the list of online players
  const [onlinePlayers, setOnlinePlayers] = useState([]);

  useEffect(() => {
    // Establish a connection with the Socket.IO server
    const socket = io();

    // Listen for 'onlinePlayers' event from the server
    socket.on('onlinePlayers', (players) => {
      setOnlinePlayers(players);
    });

    // Clean up the socket connection when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='onlineplayer'>
      <h2>Online Players</h2>
      <ul>
        {onlinePlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocketComponent;
