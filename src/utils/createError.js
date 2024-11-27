import { ERROR_PREFIX } from '../constant/message.js';

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};
