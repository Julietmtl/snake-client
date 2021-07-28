const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};


const setupInput = function () {  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // This line is the event listener. if a button does get pressed it will do something. .on means it is some kind of event listener
  return stdin;
};

module.exports = {
  setupInput,
}