## [일일코딩] 코인 0

#### 문제

https://www.acmicpc.net/submit/11047/67159223

첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)

둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다. (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)

N = 동전 종류, K = 총 금액

두번째 줄부터는 오름차순으로 K원이 주어진다

#### 입출력 예

10 4200 //동전종류, 총 금액
1
5
10
50
100
500
1000
5000
10000
50000

---

#### 내 풀이

```JS
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line.split(" ").map((el) => +el));
}).on("close", function () {
  const N = input[0][0];
  let K = input[0][1];
  let count = 0;
  let coins = [];

  // 동전 종류
  for (let i = 1; i <= N; i++) {
    coins.push(input[i]);
  }

   coins.reverse().forEach(ele =>{
        var value = Math.floor(K / ele);
        if(value >= 0){
            K -= value * ele;
            count += value;
        }
    });

  console.log(count);
  process.exit();
});

}
```

[풀이]

1. 먼저 동전 종류를 담는 배열을 만들어 동전 종류를 담았다
2. 동전 종류를 오름차순으로 뒤집은 후, forEach를 돌렸다
3. k/ele를 하게 되면 k금액에 ele가 몇개나 들어 갈 수 있는지 확인 할 수 있다.

- Math.floor는 소수점 이하를 버림하는 함수

4. k/ele를 했을 때, 몫이 1 이상이면 count을 증가시킨 후, 총 금액에서 그만큼 빼준다
5. 모든 동전 종류를 반복한다.
