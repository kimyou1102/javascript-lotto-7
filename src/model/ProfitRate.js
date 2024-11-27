export default class ProfitRate {
  constructor(investmentMoney, profit) {
    this.investmentMoney = investmentMoney;
    this.profit = profit;
  }

  calculateProfitRate() {
    return (this.profit / this.investmentMoney) * 100;
  }
}
