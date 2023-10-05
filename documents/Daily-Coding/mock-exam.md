## [일일코딩][완전탐색] 모의고사

https://school.programmers.co.kr/learn/courses/30/lessons/42840

#### 문제

수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
<br>
<br>

#### 제한사항<br>

- 시험은 최대 10,000 문제로 구성되어있습니다.
- 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예

| answers     | return  |
| ----------- | ------- |
| [1,2,3,4,5] | [1]     |
| [1,3,2,4,2] | [1,2,3] |

---

#### 내 풀이

```js
function solution(answers) {
  const pickPatterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  answers.forEach((answer, idx) => {
    pickPatterns.forEach((pattern, person) => {
      const patternIndex = idx % pattern.length;
      if (pattern[patternIndex] === answer) {
        scores[person]++;
      }
    });
  });

  const maxScore = Math.max(...scores);
  const result = [];

  scores.forEach((score, person) => {
    if (score === maxScore) {
      result.push(person + 1);
    }
  });

  return result;
}
```

#### [풀이]

1. 먼저 패턴을 구조화 해줬다
2. 점수를 쌓을 배열을 생성하고 0번째 idx에는 1번째 수포자 1번째는 2번째 수포자...
3. answers를 반복문을 돌린 뒤 패턴을 또 반복문을 돌려 2중 반복문을 실행했다
   - idx % pattern.length 로 패턴은 순환한다
4. pattern[patternIndex]이 answer과 같으면 정답인거다. 정답이니 scores에 1을 추가해준다.
5. 모든 점수에 위 패턴을 반복한다
6. scores에서 가장 높은 점수를 뽑아낸다
7. 가장 높은 점수와 같은 수포자를 모두 result 배열에 추가한다

<br>
<br>

#### 리뷰

```
많이 어려웠다. 중간에 포기 할까 싶기도 하고 많이 고민을 정말 많이 한 문제다.
이게 레벨1이라니...나의 머리가 얼마나 굳어있는지 실감나게 만드는 문제였다.
알고리즘 문제를 풀다보니 요즘 구현을 할 때 신경 쓰는 부분이 "어떻게 해야 더 효율적일까?"이다.
이번 문제는 더 많은 공부의 필요성을 느끼는바가 있다. 더 노력해서 뇌를 말랑말랑하게 만들어야겠다....

```
