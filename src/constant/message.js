import { deepFreeze } from '../utils/deepFreeze.js';

export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = deepFreeze({
  purchasePrice: {
    notANumber: '구입금액은 숫자로만 입력 가능합니다.',
    invalidUnit: '구입금액은 1,000원 단위로 입력해야 합니다.',
    minInput: '구입금액은 1000원 이상 입력해야 합니다.',
  },
  winningNumber: {
    invalidInput: '숫자와 쉼표 외에는 입력할 수 없습니다.',
    invalidCount: '당첨 번호는 6개를 입력해야 합니다.',
    duplicationNumber: '당첨 번호는 중복 없이 입력해야 합니다.',
    outOfRange: '당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
  bonusNumber: {
    duplicationNumber: '당첨 번호와 중복되지 않는 숫자여야 합니다.',
    outOfRange: '보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    notANumber: '보너스 번호는 숫자로 입력해야 합니다.',
  },
  lotto: {
    invalidCount: '로또 번호는 6개여야 합니다.',
    notANumber: '로또 번호는 숫자여야 합니다.',
    duplicationNumber: '로또 번호는 중복되지 않은 숫자여야 합니다.',
    outOfRange: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
  emptyInput: '입력값으로 빈값을 입력할 수 없습니다.',
});

export const INPUT_MESSAGE = deepFreeze({
  purchasePrice: '\n구입금액을 입력해 주세요.',
  winningNumber: '\n당첨 번호를 입력해 주세요.',
  bonusNumber: '\n보너스 번호를 입력해 주세요.',
});
