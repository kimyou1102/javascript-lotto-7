import ProfitRate from '../src/model/Profit';

describe('로또 클래스 테스트', () => {
  test('수익률을 계산한다.', () => {
    const investmentMoney = 8000;
    const profit = 5000;
    const expectResult = 62.5;

    const profitRate = new ProfitRate(investmentMoney, profit);
    expect(profitRate.calculateProfitRate()).toBe(expectResult);
  });
});
