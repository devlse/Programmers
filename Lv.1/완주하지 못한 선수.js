function solution(participant, completion) {
    const total = participant.length;
    var answer = '';
    
    participant.sort();
    completion.sort();
    
    for(let i=0; i<total; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            return answer;
        }
    }
}

// 효율성 테스트 점검
function solution(participant, completion) {
    completion.forEach(n => {
      const index = participant.indexOf(n)
      participant.splice(index, 1)
    })
    return participant[0]
  }
