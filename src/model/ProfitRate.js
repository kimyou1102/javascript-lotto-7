import { prizeByMatchCount } from '../constant/prizeByMatchCount.js';
import { LOTTO } from '../constant/constants.js';

export default class ProfitRate {
  #paidMoney;
  #result;
  #profitRate;

  constructor(paidMoney, result) {
    this.#paidMoney = paidMoney;
    this.#result = result;
    this.#profitRate = 0;

    this.#calculateProfitRate();
  }

  #calculateProfitRate() {
    let totalPrizeMoney = 0;

    for (const [rank, count] of Object.entries(this.#result)) {
      if (count > 0) {
        totalPrizeMoney += prizeByMatchCount[rank].money * count;
      }
    }

    this.#profitRate = ((totalPrizeMoney / this.#paidMoney) * 100).toFixed(
      LOTTO.PROFIT_RATE_DECIMAL_PLACE,
    );
  }

  getProfitRate() {
    return this.#profitRate;
  }
}
