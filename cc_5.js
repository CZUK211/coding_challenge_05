const employees = [
  { name: "John", hourlyRate: 20, hoursWorked: 38 },
  { name: "Kevin", hourlyRate: 25, hoursWorked: 45 },
  { name: "David", hourlyRate: 18, hoursWorked: 50 }
];

function calculateBasePay(rate, hours) {
  if (hours > 40) {
    hours = 40;
  }
  return rate * hours;
}

function calculateOvertimePay(rate, hours) {
  if (hours > 40) {
    let extra = hours - 40;
    return extra * rate * 1.5;
  }
  return 0;
}

function calculateTaxes(amount) {
  return amount * 0.15;
}

function processPayroll(emp) {
  let base = calculateBasePay(emp.hourlyRate, emp.hoursWorked);
  let overtime = calculateOvertimePay(emp.hourlyRate, emp.hoursWorked);

  let gross = base + overtime;

  let taxAmount = calculateTaxes(gross);

  let net = gross - taxAmount;

  return {
    name: emp.name,
    basePay: base,
    overtimePay: overtime,
    grossPay: gross,
    netPay: net
  };
}

for (let i = 0; i < employees.length; i++) {
  let result = processPayroll(employees[i]);
  console.log(result);
}
