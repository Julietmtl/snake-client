let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // This line is the event listener. if a button does get pressed it will do something. .on means it is some kind of event listener
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  }  else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'y') {
    connection.write("Say: Yippee");
  }
};





module.exports = {
  setupInput,
};