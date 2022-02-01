function solution(s) {
    const text = s.split(' ')
    let answer = ''
    text.forEach(n => {
        for (let i = 0; i < n.length; i++) {
            answer += i % 2 == 0 ? n[i].toUpperCase() : n[i].toLowerCase();
        }
        answer += ' '
    })
    return answer.slice(0, -1)
}