function solution(x) {
    const splited = String(x).split('')
    let sum = 0;
    splited.forEach(n => {
      sum += Number(n)
    })
    return x % sum === 0 ? true : false
  }
  