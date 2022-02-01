function solution(s) {
  if (s.length >= 1 && s.length <= 100) {
    const i = parseInt(s.length / 2);
    if (s.length % 2 == 0) {
      const answer = s[i-1]+s[i];
      return answer;
    } else {
      const answer = s[i]
      return answer;
    }
  }
}