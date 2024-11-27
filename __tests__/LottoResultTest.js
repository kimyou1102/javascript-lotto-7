import LottoResult from '../src/model/LottoResult';

describe('로또 결과 클래스 테스트', () => {
  test('로또 당첨 결과를 알 수 있다.', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    const lottos = [
      [1, 2, 3, 4, 5, 7, 10],
      [3, 4, 5, 6, 13, 12, 25],
      [31, 29, 33, 41, 7, 6],
    ];
    const expectResult = { 1: 0, 2: 1, 3: 0, 4: 1, 5: 0 };

    const lottoResult = new LottoResult(winningNumber, bonusNumber, lottos);

    expect(lottoResult.getWinningResult()).toEqual(expectResult);
  });
});
