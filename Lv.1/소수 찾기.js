function solution(n) {
    let answer = 0;
    let cnt = 0;
    for (let i = 2; i <= n; i++) {
      cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      if (cnt == 2) answer++;
    }
    return answer;
}