import { ERROR_MESSAGES } from '../constant/message.js';
import { createError } from './createError.js';

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
  checkCount(numbers, ERROR_MESSAGES.WINNING_NUMBER.INVALID_COUNT);
  checkNumbers(numbers, ERROR_MESSAGES.WINNING_NUMBER.NOT_A_NUMBER);
  checkRangeInNumbers(numbers, ERROR_MESSAGES.WINNING_NUMBER.OUT_OF_RANGE);
  checkDuplication(numbers, ERROR_MESSAGES.WINNING_NUMBER.DUPLICATION_NUMBER);
};

export const validateLottoNumber = (numbers) => {
  checkCount(numbers, ERROR_MESSAGES.LOTTO.INVALID_COUNT);
  checkNumbers(numbers, ERROR_MESSAGES.LOTTO.NOT_A_NUMBER);
  checkDuplication(numbers, ERROR_MESSAGES.LOTTO.DUPLICATION_NUMBER);
  checkRangeInNumbers(numbers, ERROR_MESSAGES.LOTTO.OUT_OF_RANGE);
};

const checkInput = (input) => {
  const regex = /[^0-9,]/;
  if (regex.test(input)) {
    createError(ERROR_MESSAGES.WINNING_NUMBER.INVALID_INPUT);
  }
};

const checkCount = (numbers, message) => {
  if (numbers.length !== 6) {
    createError(message);
  }
};

const checkDuplication = (numbers, message) => {
  if (new Set(numbers).size !== numbers.length) {
    createError(message);
  }
};

const checkNumbers = (numbers, message) => {
  if (numbers.some((number) => isNaN(number))) {
    createError(message);
  }
};

const checkRangeInNumbers = (numbers, message) => {
  if (numbers.some((number) => number > 45 || number < 1)) {
    createError(message);
  }
};

export const validateBonusNumber = (bonusInput, winningNumber) => {
  checkNumber(bonusInput, ERROR_MESSAGES.BONUS_NUMBER.NOT_A_NUMBER);
  const bonusNumber = Number(bonusInput);
  if (winningNumber.includes(bonusNumber)) {
    createError(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATION_NUMBER);
  }
  if (bonusNumber > 45 || bonusNumber < 1) {
    createError(ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE);
  }
};

const checkNumber = (input, message) => {
  if (isNaN(input)) {
    createError(message);
  }
};
