http://www.html5rocks.com/ko/tutorials/es6/promises/
- 뭐지?
    - JS는 싱글 스레드
        - 동시에 2개 스크립트 실행불가. 하나가 실행된 뒤에 나머지가 실행됨.
    - 이벤트가 항상 최선책은 아니다
        - keyup, touchstart등 동일한 객체에서 여러번 발생할 수 있는 것들에 훌륭
        - 그러나 비동기적으로 성공/실패가 왔을 때 다음과 같은 이상적인 것들을 원할 수는 있음.\
        - 만약 html이미지 엘리먼트가 promise를 반환하는 ready메서드를 갖고있다면 이렇게 할 수도 있음
    - promise는 다음과 같은 것을 제외하곤 이벤트 리스너와 비슷
        - 단 한번 성공만 하거나 실패만 함.
        - 성공하거나 실패하고 성공/실패 콜백을 나중에 추가했다면, 이벤트가 먼저 발생했다 하더라도 올바른 콜백이 호출됨
        - =>이것들은 비동기 성공/실패에 대해 엄청 유용함.
            - 이는 여러분이 어떤 것이 유효하게 되는 정확한 시점보다 그 결과에 반응하는데 관심이 더 있기 때문.
    - promise의 상태
        - fulfilled: 프로미스가 성공하였음과 관련된 액션
        - rejected: ‘’ 실패
        - pending: 아직 완료되거나(fulfilled) 거부되지(rejected)않은 상태
        - settled: 완료되거나 거부된 상태
        - 또한 규격에선 객체를 promise처럼 기술하기 위해 thenable용어를 사용하고, 이는 then메소드를 가짐.
- Promises가 자바스크립트에 도착하다
    - 라이브러리: Q, when, WinJS, RSVP.js
    - 프로미스 생성
        - promise생성자는 2개의 파라미터(resolve, reject)를 가지는 콜백 하나를 인자로 가짐. 콜백 내에서 무언가 할 수 있고, 동기화될 것이며,
        - 모든것이 정상동작하면 resolve호출, 아니면 reject호출
        - error객체를 통해 reject하는건 꼭 필요한건 아니지만 Stack trace를 수집하여 디버깅도구들을 더 유용하게 한다는 장점.
    - 프로미스 사용
        - ‘then’은 성공한 경우를 위한 콜백과 실패한 경우를 위한 다른 콜백 인자 2개를 가짐.
        - 둘 다 선택적인 사항이므로 성공이나 실패한 경우에 대해서만 콜백 추가 가능.
- XMLHttpRequest의 Promise화
- 체이닝
    - 값들을 변환하거나 비동기 동작 뒤에 또 다른 추가적인 비동기 동작을 수행하기 위해 then들을 함께 연결 가능.
    - 값의 변환