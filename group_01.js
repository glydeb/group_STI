var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function getBonus(employee) {
    var bonusPercent = 0;
    var newArray = [];

    newArray[0] = employee[0];

    switch (employee[3]) {
        case 0:
        case 1:
        case 2:
            break;
        case 3:
            bonusPercent = 4;
            break;
        case 4:
            bonusPercent = 6;
            break;
        case 5:
            bonusPercent = 10;
            break;
        default:
            alert("Invalid rating for employee " + employee[0]);
    }
    if (employee[1].length === 4) {
        bonusPercent += 5;
    }
    if (employee[2] > 65000) {
        bonusPercent--;
    }
    if (bonusPercent > 13) {
        bonusPercent = 13;
    }
    if (bonusPercent < 0) {
        bonusPercent = 0;
    }

    newArray[1] = bonusPercent;
    newArray[2] = (Math.round(employee[2] * ((bonusPercent / 100) + 1) * 100)) / 100;
    newArray[3] = Math.round(employee[2] * (bonusPercent / 100));
    return newArray;
}

for (var i = 0; i < employees.length; i++) {
    console.log(getBonus(employees[i]));
}
