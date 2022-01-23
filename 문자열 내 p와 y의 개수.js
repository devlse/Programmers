function solution(s) {
    const arr = s.toLowerCase().split('')
    let p = arr.filter(n => n === 'p')
    let y = arr.filter(n => n === 'y')
    return p.length == y.length ? true : false
  }