function traficSignal(signal) {
  if (signal == "red") {
    console.log("Please stop its danger time");
  } else if (signal == "yellow") {
    console.log("you sholud stop");
  } else if (signal == "green") {
    console.log("you can go now");
  } else {
    console.log("ami gumaiteci do not disturb me");
  }
  return;
}
traficSignal("yellow");
