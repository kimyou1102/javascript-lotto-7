import { Console } from '@woowacourse/mission-utils';

const lottoPrize = {
  1: { matchCount: 6, prize: 2_000_000_000 },
  2: { matchCount: 5, prize: 30_000_000 },
  3: { matchCount: 5, prize: 1_500_000 },
  4: { matchCount: 4, prize: 50000 },
  5: { matchCount: 3, prize: 5000 },
};

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
    const parsedMoney = lottoPrize[rank].prize.toLocaleString('ko-KR');
    if (rank === '2') {
      matchSummary.push(
        `${lottoPrize[rank].matchCount}개 일치, 보너스 볼 일치 (${parsedMoney}원) - ${count}개`,
      );
      return;
    }
    matchSummary.push(`${lottoPrize[rank].matchCount}개 일치 (${parsedMoney}원) - ${count}개`);
  }
}
