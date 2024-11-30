import {
  validateBonusNumber,
  validatePaidMoney,
  validateWinningNumber,
} from '../src/utils/validation.js';
import { ERROR_MESSAGES } from '../src/constant/message.js';

describe('구매 금액 입력 예외 테스트', () => {
  test('구입할 금액이 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validatePaidMoney('*');
    }).toThrow(ERROR_MESSAGES.purchasePrice.notANumber);
  });

  test('구입할 금액이 1000원 단위가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validatePaidMoney(1300);
    }).toThrow(ERROR_MESSAGES.purchasePrice.invalidUnit);
  });

  test('구입할 금액이 1000원 미만일 경우 예외가 발생한다.', () => {
    expect(() => {
      validatePaidMoney(300);
    }).toThrow(ERROR_MESSAGES.purchasePrice.minInput);
  });
});

describe('당첨번호 입력 예외 테스트', () => {
  test('당첨번호가 쉼표와 숫자외의 문자가 포함된 경우 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumber('1,2,3,*');
    }).toThrow(ERROR_MESSAGES.winningNumber.invalidInput);
  });

  test('당첨번호가 6개가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumber('1,2,3,4');
    }).toThrow(ERROR_MESSAGES.winningNumber.invalidCount);
  });

  test('당첨번호가 중복될 경우 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumber('1,2,3,4,5,5');
    }).toThrow(ERROR_MESSAGES.winningNumber.duplicationNumber);
  });

  test('당첨번호가 1에서 45사이의 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validateWinningNumber('1,2,3,50,5,7');
    }).toThrow(ERROR_MESSAGES.winningNumber.outOfRange);
  });
});

describe('보너스 번호 입력 예외 테스트', () => {
  test('보너스 번호가 숫자가 아닐 경우 예외가 발생한다.', () => {
    expect(() => {
      validateBonusNumber('*');
    }).toThrow(ERROR_MESSAGES.bonusNumber.notANumber);
  });

  test('보너스 번호가 당첨번호와 중복될 경우 예외가 발생한다.', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];
    expect(() => {
      validateBonusNumber('1', winningNumber);
    }).toThrow(ERROR_MESSAGES.bonusNumber.duplicationNumber);
  });

  test('보너스 번호가 1에서 45사이의 숫자가 아닐 경우 예외가 발생한다.', () => {
    const winningNumber = [1, 2, 3, 4, 5, 6];

    expect(() => {
      validateBonusNumber('47', winningNumber);
    }).toThrow(ERROR_MESSAGES.bonusNumber.outOfRange);
  });
});
