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

const checkNumber = (input, message) => {
  if (isNaN(input)) {
    createError(message);
  }
};
