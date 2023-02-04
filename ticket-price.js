function ticketPrice (ticketQuantity) {
    const firstTenTicketPrice = 100;
    const secondTenTicketPrice = 90;
    const restTicketPrice = 80;

    let totalTicketCost= 0;
    if (ticketQuantity <= 100) {
        totalTicketCost = ticketQuantity * firstTenTicketPrice;
    }
    else if (ticketQuantity <= 200) {
        const firstTenTicketCost = firstTenTicketPrice * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketCost = restTicketQuantity * secondTenTicketPrice;
        totalTicketCost = firstTenTicketCost + restTicketCost;
    }
    else {
        const firstTenTicketCost = firstTenTicketPrice * 100;
        const secondTenTicketCost = secondTenTicketPrice * 100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketCost = restTicketQuantity * 80;
        totalTicketCost = firstTenTicketCost + secondTenTicketCost + restTicketCost;
    }
    return totalTicketCost;
}

const totalTicketPrice = ticketPrice (233);
console.log (totalTicketPrice);