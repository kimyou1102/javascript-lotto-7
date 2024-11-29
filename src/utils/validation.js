import { ERROR_MESSAGES } from '../constant/message.js';
import { createError } from './createError.js';

export const validatePaidMoney = (input) => {
  checkEmpty(input);
  checkNumber(input, ERROR_MESSAGES.purchasePrice.notANumber);
  const money = Number(input);
  checkMoney(money);
};

const checkMoney = (money) => {
  if (money < 1000) {
    createError(ERROR_MESSAGES.purchasePrice.minInput);
  }
  if (money % 1000 !== 0) {
    createError(ERROR_MESSAGES.purchasePrice.invalidUnit);
  }
};

export const validateWinningNumber = (input) => {
  checkEmpty(input);
  checkInput(input);
  const numbers = input.split(',').map((x) => +x);
  checkCount(numbers, ERROR_MESSAGES.winningNumber.invalidCount);
  checkRangeInNumbers(numbers, ERROR_MESSAGES.winningNumber.outOfRange);
  checkDuplication(numbers, ERROR_MESSAGES.winningNumber.duplicationNumber);
};

export const validateLottoNumber = (numbers) => {
  checkCount(numbers, ERROR_MESSAGES.lotto.invalidCount);
  checkNumbers(numbers, ERROR_MESSAGES.lotto.notANumber);
  checkDuplication(numbers, ERROR_MESSAGES.lotto.duplicationNumber);
  checkRangeInNumbers(numbers, ERROR_MESSAGES.lotto.outOfRange);
};

const checkEmpty = (input) => {
  if (String(input).trim() === '' || input === undefined || input === null) {
    createError(ERROR_MESSAGES.emptyInput);
  }
};

const checkInput = (input) => {
  const regex = /[^0-9,]/;
  if (regex.test(input)) {
    createError(ERROR_MESSAGES.winningNumber.invalidInput);
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
  checkEmpty(bonusInput);
  checkNumber(bonusInput, ERROR_MESSAGES.bonusNumber.notANumber);
  const bonusNumber = Number(bonusInput);
  if (winningNumber.includes(bonusNumber)) {
    createError(ERROR_MESSAGES.bonusNumber.duplicationNumber);
  }
  checkRangeInNumbers([bonusNumber], ERROR_MESSAGES.bonusNumber.outOfRange);
};

const checkNumber = (input, message) => {
  if (isNaN(input)) {
    createError(message);
  }
};
