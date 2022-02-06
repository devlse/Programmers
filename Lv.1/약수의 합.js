// 문제
// 정수 n을 입력받아 n의 약수를 모두더한 값을 리턴하는 함수, solution을 완성해주세요.

// n은 0 이상 3000이하인 정수이다.

// 12   >>>>>  28
// 5    >>>>>   6

function solution(s) {
    let sum = 0
    for (let i = 1; i <= s; i++) {
      s % i === 0 ? sum += i : i
    }
    return sum
}