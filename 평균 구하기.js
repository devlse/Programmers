function solution(arr) {
    let sum = 0;
    arr.forEach(n => {
        sum += n;
    });
    const mean = sum / arr.length
    return mean;
}