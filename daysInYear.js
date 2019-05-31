'use strict'

const daysInYear = year => {
  return (new Date(year, 1, 29)).getDate() === 1
    ? 366
    : 365;
};
