import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import {
  validateMoney,
  validateWinningNumber,
  validateBonusNumber,
} from '../utils/validation.js';
import Lotto from '../Lotto.js';
import { getUniqueNumbers } from '../utils/getUniqueNumbers.js';
import { LOTTO } from '../constant/constants.js';
import { INPUT_MESSAGE } from '../constant/constants.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
    this.winningNumber = [];
  }

  async start() {
    const paidMoney = await this.getMoney();
    const lottoCount = paidMoney / LOTTO.LOTTO_PRICE;
    const lottos = this.generateLottos(lottoCount);
    const lottosNumber = lottos.map((lotto) =>
      lotto.getNumbers().sort((a, b) => a - b),
    );

    this.outputView.printLottoPurchaseHistory(lottosNumber);

    this.winningNumber = await this.getWinningNumber();
    const bonusNumber = await this.getBonusNumber();
  }

  generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => this.createLotto());
  }

  createLotto() {
    const lottoNumbers = getUniqueNumbers();

    return new Lotto(lottoNumbers);
  }

  async getBonusNumber() {
    try {
      const input = await this.inputView.getInput(INPUT_MESSAGE.BONUS_NUMBER);
      validateBonusNumber(input, this.winningNumber);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getBonusNumber();
    }
  }

  async getWinningNumber() {
    try {
      const input = await this.inputView.getInput(INPUT_MESSAGE.WINNING_NUMBER);
      validateWinningNumber(input);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getWinningNumber();
    }
  }

  async getMoney() {
    try {
      const input = await this.inputView.getInput(INPUT_MESSAGE.PURCHASE_PRICE);
      validateMoney(input);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getMoney();
    }
  }
}
