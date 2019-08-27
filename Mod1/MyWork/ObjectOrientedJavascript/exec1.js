/* Script to exercise timer
 * Author: HartCode programmer
 * Date: 08/26/2019
 */
"Use Strict";
let employees = [
    { name: "Dana", salary: 65000 },
    { name: "Michael", hourlyRate: 16.75, hoursWorked: 40 },
    { name: "Vanessa", salary: 50000 },
    { name: "Cori", hourlyRate: 17.50, hoursWorked: 55 },
    { name: "Steve", hourlyRate: 20.00, hoursWorked: 60 }
];
// emp1 = { name: "Dana", salary: 65000 };
// emp2 = { name: "Michael", hourlyRate: 16.75, hoursWorked: 40 };
// emp3 = { name: "Vanessa", salary: 50000 };
// emp4 = { name: "Cori", hourlyRate: 17.50, hoursWorked: 55 };
// emp5 = { name: "Steve", hourlyRate: 20.00, hoursWorked: 60 };

for (let i = 0; i < employees.length; i++) {
    for (key in employees[i]) {
        // console.log('${key}: ${emp1[key]}');
        console.log(key + "   :" + employees[i][key]);
        if ("salary" in employees[i]) {
            if (key == "salary") {
                let weeklyPay = getWeeklyPay(employees[i][key]);
                grossPay = 52 * weeklyPay;
                getfedTax(grossPay);
                getSocialTax(grossPay);
                getMedTax(grossPay);

            }
        } else {
            if (key == "hourlyRate") {
                let weeklyPay = getWeeklyPayHourly(employees[i]);
                grossPay = 52 * weeklyPay;
                getfedTax(grossPay);
                getSocialTax(grossPay);
                getMedTax(grossPay);
            }
        }
    }
    console.log("--------------------------");
}


function getWeeklyPay(salary) {
    let weeklyPay = salary / 52;
    console.log("Weekly Pay for Salaried Employee: " + weeklyPay);
    return weeklyPay;
}

function getWeeklyPayHourly(employees) {
    let weeklyPayHourly;
    let hourlyRate;
    let hoursWorked;
    let overTime;
    for (key in employees) {
        if (key == "hourlyRate") {
            hourlyRate = employees[key];
        }
        if (key == "hoursWorked") {
            hoursWorked = employees[key];
        }
    }

    if (hoursWorked > 40) {
        overTime = hoursWorked - 40;
        weeklyPayHourly = (40 * hourlyRate) + (overTime * 1.5 * hourlyRate)
    } else {
        weeklyPayHourly = 40 * hourlyRate;
    }
    console.log("Weekly pay for hourly rate employee: " + weeklyPayHourly);
    return weeklyPayHourly;
}

function getfedTax(grossPay) {
    let fedTax = grossPay * (12.5 / 100);
    console.log("Federal Tax: " + fedTax);
}

function getSocialTax(grossPay) {
    let socialTax = grossPay * (6.2 / 100);
    console.log("socialTax: " + socialTax)

}

function getMedTax(grossPay) {
    let MedTax = grossPay * (1.45 / 100);
    console.log("MedTax :" + MedTax);
}