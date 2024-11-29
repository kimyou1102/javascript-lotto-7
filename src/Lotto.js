import { validateLottoNumber } from './utils/validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLottoNumber(numbers);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
