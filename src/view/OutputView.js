import { Console } from '@woowacourse/mission-utils';
import { LOTTO_PRIZE } from '../constant/lotto.js';

export default class OutputView {
  printLottoList(lottos) {
    Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      Console.print(`[${lotto.join(', ')}]`);
    });
  }

  printLottoWinningResult(winningResult) {
    Console.print('\n당첨 통계\n---');
    const matchSummary = this.getMatchSummary(winningResult);
    Console.print(matchSummary);
  }

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit.toFixed(1)}%입니다.`);
  }

  getMatchSummary(winningResult) {
    let matchSummary = [];
    for (let [rank, count] of Object.entries(winningResult)) {
      this.pushMatchSummary(rank, count, matchSummary);
    }
    return matchSummary.reverse().join('\n');
  }

  pushMatchSummary(rank, count, matchSummary) {
    const parsedMoney = LOTTO_PRIZE[rank].prize.toLocaleString('ko-KR');
    if (rank === '2') {
      matchSummary.push(
        `${LOTTO_PRIZE[rank].matchCount}개 일치, 보너스 볼 일치 (${parsedMoney}원) - ${count}개`,
      );
      return;
    }
    matchSummary.push(`${LOTTO_PRIZE[rank].matchCount}개 일치 (${parsedMoney}원) - ${count}개`);
  }

  printError(message) {
    Console.print(message);
  }
}
