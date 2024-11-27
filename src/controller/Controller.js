import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import { getUniqueNumbersInRange } from '../utils/getUniqueNumbersInRange';
import Lotto from '../Lotto';
import { lottoPrize } from '../constant/lotto';

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
    const matchResult = this.getMatchResult(winningNumber, Number(bonusNumber), lottos);
    const winningResult = this.getWinningResult(matchResult);
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

  // eslint-disable-next-line max-lines-per-function
  getWinningResult(matchResult) {
    const win = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };
    for (let result of matchResult) {
      if (result.matchCount < 3) continue;
      if (result.matchCount === 6) {
        win[1] += 1;
        continue;
      }
      const rank = 8 - result.matchCount;
      if (result.matchCount === 5 && result.bonusNumber === 1) {
        win[2] += 1;
        continue;
      }
      win[rank] += 1;
    }
    return win;
  }

  getMatchResult(winningNumber, bonusNumber, lottos) {
    const matchs = [];
    lottos.forEach((lotto) => {
      let matchedBonusNumber = 0;
      const matchedWinningNumber = lotto.filter((number) => winningNumber.includes(number)).length;
      if (lotto.includes(bonusNumber)) matchedBonusNumber += 1;
      matchs.push({ matchCount: matchedWinningNumber, bonusNumber: matchedBonusNumber });
    });
    return matchs;
  }
}
