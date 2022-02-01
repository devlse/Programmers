function solution(phone_number) {
    const index = phone_number.length - 4
    let answer = '';
    for (let i = 0; i < phone_number.length; i++) {
      if (i >= index) {
        answer += phone_number[i]
      } else {
        answer += '*'
      }
    }
    return answer
  }