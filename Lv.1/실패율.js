// 문제
// 스테이지 실패율 = 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때,
// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨 있는 배열을 return 하도록 solution 함수를 완성하라.

// N: 5, stages: [2,1,2,6,2,4,3,3]  >>>>>   [3,4,2,1,5]
// N: 4, stages: [4,4,4,4,4]    >>>>>   [4,1,2,2]

function solution(N, stages) {
    let answer = [];
    for (let i = 1; i <= N; i++) {
      const failed = stages.filter(n => n == i).length;  // 클리어하지 못한 플레이어 수
      const arrived = stages.filter(n => n >= i).length; // 스테이지에 도달한 플레이어 수
      
      answer.push({idx: i, ratio: failed / arrived}); // 각 스테이지 실패율
    }
    answer = answer.sort((a,b) => b.ratio-a.ratio);
    return answer.map(m => m.idx);
};
