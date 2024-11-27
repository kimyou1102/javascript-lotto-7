import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import { getUniqueNumbersInRange } from '../utils/getUniqueNumbersInRange';
import Lotto from '../Lotto';
import { lottoPrize } from '../constant/lotto';
import LottoResult from '../model/LottoResult';

export class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  // eslint-disable-next-line max-lines-per-function
  async start() {
    const paidMoney = await this.inputView.getInput('구입금액을 입력해 주세요.');
    const lottoCount = paidMoney / 1000;
    const lottos = this.createLottos(lottoCount);
    this.outputView.printLottoList(lottos);
    const winningNumberInput = await this.inputView.getInput('\n당첨 번호를 입력해 주세요.');
    const winningNumber = winningNumberInput.split(',').map((x) => +x);
    const bonusNumber = await this.inputView.getInput('\n보너스 번호를 입력해 주세요.');
    const lottoResult = new LottoResult(winningNumber, Number(bonusNumber), lottos);
    const winningResult = lottoResult.getWinningResult();
    this.outputView.printLottoWinningResult(winningResult);
    const totalPrizeMoney = this.getSumPrizeMoney(winningResult);
    const profit = this.getProfit(totalPrizeMoney, paidMoney);
    this.outputView.printProfit(profit);
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

  getProfit(prizeMoney, paidMoney) {
    return (prizeMoney / paidMoney) * 100;
  }
}
