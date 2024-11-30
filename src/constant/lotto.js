import { deepFreeze } from '../utils/deepFreeze.js';

export const LOTTO_PRIZE = deepFreeze({
  1: { matchCount: 6, prize: 2_000_000_000 },
  2: { matchCount: 5, prize: 30_000_000 },
  3: { matchCount: 5, prize: 1_500_000 },
  4: { matchCount: 4, prize: 50000 },
  5: { matchCount: 3, prize: 5000 },
});

export const LOTTO_RANK = deepFreeze({
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
});

export const LOTTO = {
  LOTTO_PRICE: 1000,
  LOTTO_NUMBER_COUNT: 6,
  LOTTO_NUMBER_RANGE_MIN: 1,
  LOTTO_NUMBER_RANGE_MAX: 45,
  LOTTO_NUMBER_SEPARATOR: ',',
};
