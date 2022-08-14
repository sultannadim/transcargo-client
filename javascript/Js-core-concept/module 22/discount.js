/*
1. jodi 100 ticket kina hoy
100 ticket  price -- 100 taka per pice
2. jodi 200 ticket kina hoy
100 ticket  price -- 100 taka per pice
101-200 ---- 90 taka per pice
3. 200 er upore ticket kinle
100 ticket  price -- 100 taka per pice
101-200 ---- 90 taka per pice
rest ticket price --- 70 taka per pice

*/
const first100Rate = 100;
const second100Rate = 90;
const restTicketRate = 70;

function discount(ticketQuantity) {
  if (ticketQuantity <= 100) {
    const totalPrice = first100Rate * ticketQuantity;
    return totalPrice;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const second100Price = second100Rate * (ticketQuantity - 100);
    const totalPrice = first100Price + second100Price;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = second100Rate * 100;
    const restTicketPrice = restTicketRate * (ticketQuantity - 200);
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
}

const result = discount(300);
console.log(result);
