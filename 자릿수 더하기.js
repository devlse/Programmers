function solution(n) {
    const text = String(n).split('');
    let sum = 0;
    text.forEach(n => {
      sum += Number(n)
    })
    return(sum);
}