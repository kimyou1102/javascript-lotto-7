import { LOTTO_RANK } from '../constant/lotto.js';

export default class LottoResult {
  constructor(winningNumber, bonusNumber, lottos) {
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
    this.lottos = lottos;
    this.lottoResult = { ...LOTTO_RANK };
  }

  getWinningResult() {
    const matchResult = this.getMatchResult();

    for (let result of matchResult) {
      if (result.matchCount < 3) continue;
      this.updateFirstPlace(result.matchCount);
      this.updateLowerPlaces(result.matchCount, result.bonusNumber);
    }
    return this.lottoResult;
  }

  getMatchResult() {
    const matchResult = [];
    this.lottos.forEach((lotto) => {
      let matchedBonusNumber = 0;
      const matchCount = lotto.filter((number) => this.winningNumber.includes(number)).length;
      if (lotto.includes(this.bonusNumber)) matchedBonusNumber += 1;
      matchResult.push({ matchCount, bonusNumber: matchedBonusNumber });
    });
    return matchResult;
  }

  updateFirstPlace(matchCount) {
    if (matchCount === 6) {
      this.lottoResult[1] += 1;
    }
  }

  updateLowerPlaces(matchCount, bonusNumber) {
    const rank = 8 - matchCount;
    if (matchCount === 5 && bonusNumber === 1) {
      this.lottoResult[2] += 1;
      return;
    }
    this.lottoResult[rank] += 1;
  }
}
