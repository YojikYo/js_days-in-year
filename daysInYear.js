'use strict'

const daysInYear = year => {
  return (new Date(year, 1, 29)).getDate() === 29
    ? 366
    : 365;
};
