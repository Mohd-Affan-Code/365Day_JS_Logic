// **Day 6:** Check whether a year is a leap year

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap Year`);
  } else {
    console.log(`${year} is NOT a Leap Year`);
  }
}

checkLeapYear(2024);
checkLeapYear(2025);
checkLeapYear(2026);
checkLeapYear(2027);
checkLeapYear(2028);
checkLeapYear(2029);
checkLeapYear(2023);
checkLeapYear(2021);
checkLeapYear(2022);
checkLeapYear(2000);
checkLeapYear(1900);
