var bet = Number(prompt("Place a bet."));
if (isNaN(bet)) {
    while (isNaN(bet)) {
        bet = Number(prompt("Hey! You can't bet letters here! Whadda think this is, Sesame Street?!"));
        if (isNaN(bet)) {
            while (isNaN(bet)) {
                bet = Number(prompt("Hey, you can't bet that little!"));
            }
        }
    }
}
if (bet < 0) {
    while (bet <= 0) {
        bet = Number(prompt("Hey, you can't bet that little!"));
        if (isNaN(bet)) {
            while (isNaN(bet)) {
                bet = Number(prompt("Hey! You can't bet letters here! Whadda think this is, Sesame Street?!"));
            }
        }
    }
}
var gambledMoney = bet;
var newWins, accumulatedWins;
var doubleBet = bet * 2;
var tripleBet = bet * 3;
var firstNumber = Math.floor(Math.random() * 6) + 1;
var secondNumber = Math.floor(Math.random() * 6) + 1;
var thirdNumber = Math.floor(Math.random() * 6) + 1;
var slotArray = [];
if (firstNumber === 1) {
    slotArray.push('Cherry');
} else if (firstNumber === 2) {
    slotArray.push('Oranges');
} else if (firstNumber === 3) {
    slotArray.push('Plums');
} else if (firstNumber === 4) {
    slotArray.push('Bells');
} else if (firstNumber === 5) {
    slotArray.push('Melons');
} else if (firstNumber === 6) {
    slotArray.push('Bars');
}
if (secondNumber === 1) {
    slotArray.push('Cherry');
} else if (secondNumber === 2) {
    slotArray.push('Oranges');
} else if (secondNumber === 3) {
    slotArray.push('Plums');
} else if (secondNumber === 4) {
    slotArray.push('Bells');
} else if (secondNumber === 5) {
    slotArray.push('Melons');
} else if (secondNumber === 6) {
    slotArray.push('Bars');
}
if (thirdNumber === 1) {
    slotArray.push('Cherry');
} else if (thirdNumber === 2) {
    slotArray.push('Oranges');
} else if (thirdNumber === 3) {
    slotArray.push('Plums');
} else if (thirdNumber === 4) {
    slotArray.push('Bells');
} else if (thirdNumber === 5) {
    slotArray.push('Melons');
} else if (thirdNumber === 6) {
    slotArray.push('Bars');
}
var moneyForTheHouse = 0;
if (slotArray[0] !== slotArray[1] && slotArray[0] !== slotArray[2] && slotArray[1] !== slotArray[2]) {
    accumulatedWins = 0;
    moneyForTheHouse = bet;
    alert(slotArray.join(" | "));
    alert("Whoops! You’ve lost it all!");
    alert("The house always wins!");
}
if (slotArray[0] === slotArray[1] && slotArray[0] === slotArray[2] && slotArray[1] === slotArray[2]) {
    accumulatedWins = tripleBet;
    alert(slotArray.join(" | "));
    alert("Holy smokes! You’ve got a triple!");
    alert("+$" + tripleBet + " to you!");
} else {
if (slotArray[0] === slotArray[1] || slotArray[0] === slotArray[2] || slotArray[1] === slotArray[2]) {
    accumulatedWins = doubleBet;
    alert(slotArray.join(" | "));
    alert("Whoa! You’ve got a double!");
    alert("+$" + doubleBet + " to you!");
}
}
var playAgain = confirm("You have currently won $" + accumulatedWins + ". Would you like to play again?");
if (playAgain) {
    while (playAgain) {
        if (accumulatedWins > 0) {
            winningBet = confirm("Would you like to bet from your current winnings?");
            if (winningBet) {
                bet = Number(prompt("How much would you like to bet?"));
                if (isNaN(bet)) {
                    while (isNaN(bet)) {
                        bet = Number(prompt("Hey! You didn't win any letters here!"));
                    }
                }
                if (bet > accumulatedWins) {
                    while (bet > accumulatedWins) {
                        bet = Number(prompt("Hey! You're gambling from what you have so far, you don't have that much!"));
                        if (isNaN(bet)) {
                            while (isNaN(bet)) {
                                bet = Number(prompt("Hey! You didn't win any letters here!"));
                            }
                        }
                    }
                }
            } else {
                bet = Number(prompt("How much would you like to bet?"));
                if (isNaN(bet)) {
                    while (isNaN(bet)) {
                        bet = Number(prompt("Hey! You didn't win any letters here!"));
                    }
                }
            }
        } else {
            bet = Number(prompt("How much would you like to bet?"));
            if (isNaN(bet)) {
                while (isNaN(bet)) {
                    bet = Number(prompt("Hey! You didn't win any letters here!"));
                }
            }
        }
        doubleBet = bet * 2;
        tripleBet = bet * 3;
        firstNumber = Math.floor(Math.random() * 6) + 1;
        secondNumber = Math.floor(Math.random() * 6) + 1;
        thirdNumber = Math.floor(Math.random() * 6) + 1;
        slotArray = [];
        if (firstNumber === 1) {
            slotArray.push('Cherry');
        } else if (firstNumber === 2) {
            slotArray.push('Oranges');
        } else if (firstNumber === 3) {
            slotArray.push('Plums');
        } else if (firstNumber === 4) {
            slotArray.push('Bells');
        } else if (firstNumber === 5) {
            slotArray.push('Melons');
        } else if (firstNumber === 6) {
            slotArray.push('Bars');
        }
        if (secondNumber === 1) {
            slotArray.push('Cherry');
        } else if (secondNumber === 2) {
            slotArray.push('Oranges');
        } else if (secondNumber === 3) {
            slotArray.push('Plums');
        } else if (secondNumber === 4) {
            slotArray.push('Bells');
        } else if (secondNumber === 5) {
            slotArray.push('Melons');
        } else if (secondNumber === 6) {
            slotArray.push('Bars');
        }
        if (thirdNumber === 1) {
            slotArray.push('Cherry');
        } else if (thirdNumber === 2) {
            slotArray.push('Oranges');
        } else if (thirdNumber === 3) {
            slotArray.push('Plums');
        } else if (thirdNumber === 4) {
            slotArray.push('Bells');
        } else if (thirdNumber === 5) {
            slotArray.push('Melons');
        } else if (thirdNumber === 6) {
            slotArray.push('Bars');
        }
        if (slotArray[0] !== slotArray[1] && slotArray[0] !== slotArray[2] && slotArray[1] !== slotArray[2]) {
            if (accumulatedWins === 0) {
                moneyForTheHouse = moneyForTheHouse + bet;
            } else if (accumulatedWins !== 0 && accumulatedWins < bet) {
                newWins = bet - accumulatedWins;
                accumulatedWins = 0;
                moneyForTheHouse = moneyForTheHouse + newWins;
            } else if (accumulatedWins !== 0 && accumulatedWins === bet) {
                accumulatedWins = 0;
            } else if (accumulatedWins !== 0 && accumulatedWins > bet) {
                accumulatedWins = accumulatedWins - bet;
            }
            alert(slotArray.join(" | "));
            alert("Whoops! You’ve lost it all!");
            alert("The house always wins!");
        }
        if (slotArray[0] === slotArray[1] && slotArray[0] === slotArray[2] && slotArray[1] === slotArray[2]) {
            if (moneyForTheHouse === 0) {
                accumulatedWins = accumulatedWins + tripleBet;
            } else if (moneyForTheHouse !== 0 && moneyForTheHouse < tripleBet) {
                newWins = tripleBet - moneyForTheHouse;
                moneyForTheHouse = 0;
                accumulatedWins = accumulatedWins + newWins;
            } else if (moneyForTheHouse !== 0 && moneyForTheHouse === tripleBet) {
                moneyForTheHouse = 0;
            } else if (moneyForTheHouse !== 0 && moneyForTheHouse > tripleBet) {
                moneyForTheHouse = moneyForTheHouse - tripleBet;
            }
            alert(slotArray.join(" | "));
            alert("Holy smokes! You’ve got a triple!");
            alert("+$" + tripleBet + " to you!");
        } else {
        if (slotArray[0] === slotArray[1] || slotArray[0] === slotArray[2] || slotArray[1] === slotArray[2]) {
            if (moneyForTheHouse === 0) {
                accumulatedWins = accumulatedWins + doubleBet;
            } else if (moneyForTheHouse !== 0 && moneyForTheHouse < doubleBet) {
                newWins = doubleBet - moneyForTheHouse;
                moneyForTheHouse = 0;
                accumulatedWins = accumulatedWins + newWins;
            } else if (moneyForTheHouse !== 0 && moneyForTheHouse === doubleBet) {
                moneyForTheHouse = 0;
            } else if (moneyForTheHouse !== 0 && moneyForTheHouse > doubleBet) {
                moneyForTheHouse = moneyForTheHouse - doubleBet;
            }
            alert(slotArray.join(" | "));
            alert("Whoa! You’ve got a double!");
            alert("+$" + doubleBet + " to you!");
        }
    }
        playAgain = confirm("You have currently won $" + accumulatedWins + ". Would you like to play again?");
    }
}
if (moneyForTheHouse > 0) {
    alert("Alright! You walk away with $" + accumulatedWins + "! Have a great day, and thank you for the $" + moneyForTheHouse + "!");
} else {
    alert("Alright! You walk away with $" + accumulatedWins + "! Have a great day!");
}

/*
if (moneyForTheHouse === double/tripleBet) {
    moneyForTheHouse = 0
} else if (moneyForTheHouse < double/tripleBet) {
    moneyForTheHouse = 0;
    newWins = double/tripleBet - moneyForTheHouse;
    accumulatedWins = accumulatedWins + newWins;
} else if (moneyForTheHouse > doube/tripleBet) {
    moneyForTheHouse = moneyForTheHouse - doube/tripleBet;
} else if (moneyForTheHouse === 0) {
    accumulatedWins = accumulatedWins + double/tripleBet
}
*/