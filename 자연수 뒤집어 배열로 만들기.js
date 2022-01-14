function solution(n) {
    const arr = String(n).split('').reverse()
    let answer = []
    arr.forEach(n => {
        answer.push(Number(n))
    })
    return answer
}