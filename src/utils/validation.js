import { ERROR_MESSAGES } from '../constant/message';
import { createError } from './createError';

export const validatePaidMoney = (input) => {
  checkNumber(input, ERROR_MESSAGES.PURCHASE_PRICE.NOT_A_NUMBER);
  const money = Number(input);
  if (money < 1000) {
    createError(ERROR_MESSAGES.PURCHASE_PRICE.MIN_INPUT);
  }
  if (money % 1000 !== 0) {
    createError(ERROR_MESSAGES.PURCHASE_PRICE.INVALID_UNIT);
  }
};

export const validateWinningNumber = (input) => {
  checkInput(input);
  const numbers = input.split(',').map((x) => +x);
  checkCount(numbers);
  checkNumbers(numbers);
  checkRangeInNumbers(numbers);
  checkDuplication(numbers);
};

const checkInput = (input) => {
  const regex = /[^0-9,]/;
  if (regex.test(input)) {
    createError(ERROR_MESSAGES.WINNING_NUMBER.INVALID_INPUT);
  }
};

const checkCount = (numbers) => {
  if (numbers.length !== 6) {
    createError(ERROR_MESSAGES.WINNING_NUMBER.INVALID_COUNT);
  }
};

const checkDuplication = (numbers) => {
  if (new Set(numbers).size !== numbers.length) {
    createError(ERROR_MESSAGES.WINNING_NUMBER.DUPLICATION_NUMBER);
  }
};

const checkNumbers = (numbers) => {
  if (numbers.some((number) => isNaN(number))) {
    createError(ERROR_MESSAGES.WINNING_NUMBER.NOT_A_NUMBER);
  }
};

const checkRangeInNumbers = (numbers) => {
  if (numbers.some((number) => number > 45 || number < 1)) {
    createError(ERROR_MESSAGES.WINNING_NUMBER.OUT_OF_RANGE);
  }
};

const checkNumber = (input, message) => {
  if (isNaN(input)) {
    createError(message);
  }
};
