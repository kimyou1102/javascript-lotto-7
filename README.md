# javascript-lotto-precourse

## 구현 기능 목록

### 로또

- [x] 로또 번호를 발행한다.
  - [x] 로또 번호의 숫자 범위는 1~45까지이다.
  - [x] 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
  - [x] 발행 개수는 (로또 구입 금액 / 1000) 이다.
- [x] 당첨 내역을 계산한다.

  - [x] 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - [x] 1등: 6개 번호 일치 / 2,000,000,000원
    - [x] 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - [x] 3등: 5개 번호 일치 / 1,500,000원
    - [x] 4등: 4개 번호 일치 / 50,000원
    - [x] 5등: 3개 번호 일치 / 5,000원

- [x] 수익률을 계산한다.
  - [x] 수익률 = 당첨 총액 / 구매 금액 \* 100

### 입력

- [ ] 모든 입력은 빈값이 올 수 없다.
- [x] 로또 구입 금액을 입력받는다.
  - [x] 구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 "[ERROR]"로 시작하는 Error를 발생시키고 해당 메시지를 출력한 다음 해당 지점부터 다시 입력을 받는다.
  - [x] 구입 금액이 숫자가 아니면 예외처리
- [x] 당첨 번호를 입력받는다. 번호는 쉼표(,)를 기준으로 구분한다.

  - [x] 쉼표가 없으면 예외처리
  - [x] 번호가 6개가 아니면 예외처리
  - [x] 중복된 번호가 있다면 예외처리
  - [x] 특수기호가 , 외에 다른게 있다면 예외처리
  - [x] 번호가 1부터 45 사이의 숫자가 아니면 예외처리
  - [x] 번호가 숫자가 아니면 예외처리

- [x] 보너스 번호를 입력받는다.
  - [x] 당첨 번호중에 한개라면 예외처리
  - [x] 숫자가 아니면 예외처리
  - [x] 번호가 1부터 45 사이의 숫자가 아니면 예외처리

### 출력

- [x] 발행한 로또 수량 및 번호를 출력한다. 로또 번호는 오름차순으로 정렬하여 보여준다.
- [x] 당첨 내역을 출력한다.
- [x] 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%)
- [ ] 예외 상황 시 에러 문구를 출력해야 한다. 단, 에러 문구는 "[ERROR]"로 시작해야 한다.

### 기능 순서

- [x] 구입 금액을 입력받는다.
- [x] 구매 개수 안내와 함께 발행된 로또 번호를 출력한다.
- [x] 당첨 번호를 입력받는다.
- [x] 보너스 번호를 입력받는다.
- [x] 입력받은 당첨번호, 보너스 번호, 구매한 로또 번호를 토대로 당첨 내역을 연산한다.
- [x] 당첨 통계를 출력한다.

### 테스트

- [ ] 잘못된 입력 시 에러 메시지를 출력하고, 올바른 입력이 들어올 때까지 재입력 받는 기능 테스트
- [x] 각 입력에 대한 예외처리 테스트
- [x] 입력된 구입 금액만큼 로또 생성 테스트
- [ ] 로또 구입 내역 출력 테스트
- [x] 당첨 결과 도출 테스트
- [x] 수익률 계산 테스트
- [ ] 당첨 통계 출력 테스트
