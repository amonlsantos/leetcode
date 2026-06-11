function climbStairs(n: number): number {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let b = 1;
    let fibo = 0
    for (let i = 0; i < n; i++) {
        fibo = a + b
        a = b
        b = fibo;
    }

    return fibo;
};