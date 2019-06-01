'use strict'

function ErrorBadArguments(message) {
  this.message = message;
  this.name = 'NotValidArguments'
}

// There is one simply method, but it only works for 1900 - 2100...
// Here I introduce both methods
function daysInYear(year) {
  const regForDateObj = /^(\+)?[19|20][0-9]{2}$/;
  const regForOthers = /^(\+)?[0-9]+$/;

  if (Number.isInteger(year)) {
    if (regForDateObj.test(year.toString())) {
    return (new Date(year, 1, 29)).getDate() === 29
      ? 366
      : 365;
    } else if (regForOthers.test(year)) {
      return (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        ? 366
        : 365;
    }
  }
  throw new ErrorBadArguments('Argument is not a valid year.');
};

function logMyErrors(message, name) {
  console.log(`Error "${name}": ${message}.`);
}

try {
	const days = daysInYear(2000);
	console.log(days);
} catch (e) {
  logMyErrors(e.message, e.name);
}
