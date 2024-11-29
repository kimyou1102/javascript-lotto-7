import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../Lotto.js';
import LottoResult from '../model/LottoResult.js';
import ProfitRate from '../model/ProfitRate.js';
import { getUniqueNumbersInRange } from '../utils/getUniqueNumbersInRange.js';
import { lottoPrize } from '../constant/lotto.js';
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

  async start() {
    const paidMoney = await this.getPaidMoney();
    const lottos = this.buyLotto(paidMoney);
    const { winningNumber, bonusNumber } = await this.getWinningNumbers();

    const lottoResult = new LottoResult(winningNumber, bonusNumber, lottos);
    const winningResult = lottoResult.getWinningResult();
    const profit = this.getProfit(paidMoney, winningResult);
    this.printStatistics(winningResult, profit);
  }

  buyLotto(paidMoney) {
    const lottos = this.createLottos(paidMoney / 1000);
    this.outputView.printLottoList(lottos);

    return lottos;
  }

  async getWinningNumbers() {
    const winningNumber = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber(winningNumber);

    return { winningNumber, bonusNumber };
  }

  getProfit(paidMoney, winningResult) {
    const totalPrizeMoney = this.getSumPrizeMoney(winningResult);
    const profitRate = new ProfitRate(paidMoney, totalPrizeMoney);
    return profitRate.calculateProfitRate();
  }

  printStatistics(winningResult, profit) {
    this.outputView.printLottoWinningResult(winningResult);
    this.outputView.printProfit(profit);
  }

  createLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => {
      const lottoNumbers = getUniqueNumbersInRange();
      return new Lotto(lottoNumbers);
    }).map((lotto) => lotto.getNumbers());
  }

  getSumPrizeMoney(winningResult) {
    const winningResultArr = Object.entries(winningResult);
    return winningResultArr.reduce((acc, value) => acc + lottoPrize[value[0]].prize * value[1], 0);
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
