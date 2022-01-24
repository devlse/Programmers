function solution(s) {
    const arr = s.split(' ').sort((a,b) => a-b)
    let min = arr.shift()
    let max = arr.pop()
    return min + ' ' + max
  }