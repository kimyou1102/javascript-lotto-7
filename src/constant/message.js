export const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGES = {
  PURCHASE_PRICE: {
    NOT_A_NUMBER: '구입금액은 숫자로만 입력 가능합니다.',
    INVALID_UNIT: '구입금액은 1,000원 단위로 입력해야 합니다.',
    MIN_INPUT: '구입금액은 1000원 이상 입력해야 합니다.',
  },
  WINNING_NUMBER: {
    INVALID_INPUT: '숫자와 쉼표 외에는 입력할 수 없습니다.',
    INVALID_COUNT: '당첨 번호는 6개를 입력해야 합니다.',
    DUPLICATION_NUMBER: '당첨 번호는 중복 없이 입력해야 합니다.',
    OUT_OF_RANGE: '당첨 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
  BONUS_NUMBER: {
    DUPLICATION_NUMBER: '당첨 번호와 중복되지 않는 숫자여야 합니다.',
    OUT_OF_RANGE: '보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
    NOT_A_NUMBER: '보너스 번호는 숫자로 입력해야 합니다.',
  },
  LOTTO: {
    NOT_A_NUMBER: '로또 번호는 숫자여야 합니다.',
    DUPLICATION_NUMBER: '로또 번호는 중복되지 않은 숫자여야 합니다.',
    OUT_OF_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  },
  INPUT_ERROR: '입력 중 오류가 발생했습니다.',
  EMPTY_INPUT: '입력값으로 빈값을 입력할 수 없습니다.',
};

export const INPUT_MESSAGE = {
  PURCHASE_PRICE: '\n구입금액을 입력해 주세요.',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',
  RESULT: '\n당첨 통계\n---',
};
