let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    if (data === "\u0003") {
      process.exit();
    }

    if (data === "w") {
      connection.write("Move: up");
    }
    if (data === "a") {
      connection.write("Move: left");
    }
    if (data === "s") {
      connection.write("Move: down");
    }
    if (data === "d") {
      connection.write("Move: right");
    }

    if (data === "t") {
      connection.write("Say: Hello");
    }

    if (data === "y") {
      connection.write("Say: How are you");
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;
