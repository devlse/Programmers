function solution(array, commands) {
    let sliced = []
    let answer = []
    for (let i = 0; i < commands.length; i++) {
      sliced = array.slice(commands[i][0]-1, commands[i][1])
      answer.push(sliced.sort((a,b)=> a-b)[commands[i][2]-1])
    }
    return answer
  }