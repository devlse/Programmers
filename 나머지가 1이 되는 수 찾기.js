function solution(n) {
    let answer = []
    for (let i = 2; i <= 1000000; i++) {
      n % i === 1 ? answer.push(i) : i
    }
    return Math.min(...answer)
  }