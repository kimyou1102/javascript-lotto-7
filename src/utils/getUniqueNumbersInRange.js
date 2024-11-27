import { Random } from '@woowacourse/mission-utils';

export const getUniqueNumbersInRange = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
};
