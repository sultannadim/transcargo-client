// Problem:1 radianToDegree
// validation list
/**
 * number validation
 */
function radianToDegree(radian) {
  let degree = radian * (180 / 3.14159);
  if (typeof radian !== "number") {
    return "Please input number";
  } else {
    return parseFloat(degree.toFixed(2));
  }
}

// Problem:2 isJavaScriptFile
// validation list
/**
 * string validation
 */
function isJavascriptFile(nameText) {
  if (typeof nameText !== "string") {
    return "Plese input String";
  } else {
    if (nameText.endsWith(".js")) {
      return true;
    } else {
      return false;
    }
  }
}

// Problem 3: oilPrice
// validation list
/**
 * parameter validation
 * number validation
 */
function oilPrice(diesel, petrol, octane) {
  const dieselPerUnitePrice = 114;
  const petrolPerUnitePrice = 130;
  const octanePerUnitePrice = 135;
  const totalDiselPrice = dieselPerUnitePrice * diesel;
  const totalPetrolPrice = petrolPerUnitePrice * petrol;
  const totalOctanePrice = octanePerUnitePrice * octane;
  const totalOilPrice = totalDiselPrice + totalPetrolPrice + totalOctanePrice;
  if (diesel === undefined || petrol === undefined || octane === undefined) {
    return "Please input all parameter";
  } else {
    if (
      typeof diesel !== "number" ||
      typeof petrol !== "number" ||
      typeof octane !== "number"
    ) {
      return "Please input Number";
    } else {
      return totalOilPrice;
    }
  }
}

// Problem 4: publicBusFare
// validation list
/**
 * number validation
 */
function publicBusFare(public) {
  const byBus = public % 50;
  const byMicroBus = byBus % 11;
  const byPublicBus = byMicroBus;
  const publicBusTicketPrice = 250;
  const totalPublicBuscost = publicBusTicketPrice * byPublicBus;
  if (typeof public !== "number") {
    return "Please Input a Number";
  } else {
    return totalPublicBuscost;
  }
}

// Problem 5: isBestFriend
// validation list
/**
 * parameter validation
 * object validation
 * string validation
 */
function isBestFriend(friend1, friend2) {
  if (friend1 == undefined || friend2 == undefined) {
    return "Please input all parameter";
  } else {
    if (typeof friend1 === "object" && typeof friend2 === "object") {
      if (
        typeof friend1.name !== "string" ||
        typeof friend1.friend !== "string" ||
        typeof friend2.name !== "string" ||
        typeof friend2.friend !== "string"
      ) {
        return "Please input string value";
      } else {
        if (
          friend1.name === friend2.friend &&
          friend2.name === friend1.friend
        ) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return "Please input a object";
    }
  }
}
