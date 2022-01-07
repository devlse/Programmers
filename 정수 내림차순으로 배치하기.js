function solution(n) {
    const splited = String(n).split('').sort((a,b) => b-a)
    let answer = []
    splited.forEach(n => {
        answer += Number(n)
    })
    return Number(answer)
}