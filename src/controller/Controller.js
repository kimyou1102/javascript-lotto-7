import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { getUniqueNumbersInRange } from '../utils/getUniqueNumbersInRange.js';
import Lotto from '../Lotto';
import { lottoPrize } from '../constant/lotto.js';
import LottoResult from '../model/LottoResult.js';
import ProfitRate from '../model/ProfitRate.js';
import {
  validatePaidMoney,
  validateWinningNumber,
  validateBonusNumber,
} from '../utils/validation.js';
import { INPUT_MESSAGE } from '../constant/message.js';

export class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  // eslint-disable-next-line max-lines-per-function
  async start() {
    const paidMoney = await this.getPaidMoney();
    const lottos = this.createLottos(paidMoney / 1000);
    this.outputView.printLottoList(lottos);
    const winningNumber = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumber);
    const lottoResult = new LottoResult(winningNumber, bonusNumber, lottos);
    const winningResult = lottoResult.getWinningResult();
    const profit = this.getProfit(paidMoney, winningResult);
    this.outputView.printLottoWinningResult(winningResult);
    this.outputView.printProfit(profit);
  }

  getProfit(paidMoney, winningResult) {
    const totalPrizeMoney = this.getSumPrizeMoney(winningResult);
    const profitRate = new ProfitRate(paidMoney, totalPrizeMoney);
    return profitRate.calculateProfitRate();
  }

  createLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const lottoNumbers = getUniqueNumbersInRange();
      return new Lotto(lottoNumbers);
    }).map((lotto) => lotto.getNumbers());
  }

  getSumPrizeMoney(winningResult) {
    const arr = Object.entries(winningResult);
    return arr.reduce((acc, value) => acc + lottoPrize[value[0]].prize * value[1], 0);
  }

  async getPaidMoney() {
    return await this.getValidatedInputWithRetry(INPUT_MESSAGE.PURCHASE_PRICE, validatePaidMoney);
  }

  async getWinningNumber() {
    return this.getValidatedInputWithRetry(INPUT_MESSAGE.WINNING_NUMBER, validateWinningNumber);
  }

  async getBonusNumber(winningNumber) {
    return this.getValidatedInputWithRetry(
      INPUT_MESSAGE.BONUS_NUMBER,
      validateBonusNumber,
      winningNumber,
    );
  }

  async getValidatedInputWithRetry(message, validate, winningNumber) {
    try {
      const input = await this.inputView.getInput(message);
      validate(input, winningNumber);
      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      return await this.getValidatedInputWithRetry(message, validate, winningNumber);
    }
  }
}
