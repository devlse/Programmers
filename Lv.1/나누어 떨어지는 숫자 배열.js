function solution(arr, divisor) {
    const answer = arr.sort((a,b) => a-b).filter(n => n % divisor === 0)
    const noelem = arr.sort((a,b) => a-b).filter(n => n % divisor !== 0)
    return noelem.length == arr.length ? [-1] : answer
  }

// 다른 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}