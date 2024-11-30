import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constant/lotto.js';
export const getUniqueNumbersInRange = () => {
  return Random.pickUniqueNumbersInRange(
    LOTTO.LOTTO_NUMBER_RANGE_MIN,
    LOTTO.LOTTO_NUMBER_RANGE_MAX,
    LOTTO.LOTTO_NUMBER_COUNT,
  );
};
