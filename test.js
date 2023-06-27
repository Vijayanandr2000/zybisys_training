let m = 1e9 + 7
function solves(A, B) {
    let ans = 0
    let dp = Array(A+1).fill().map(() => Array(B+1).fill(-1))
    console.log(dp)
    function solve(digitLeft, sum) {
        if(sum < 0) return 0;
        if(digitLeft == 0 && sum == 0) return 1;
        if(digitLeft == 0) return 0;

        if(dp[digitLeft][sum] != -1) return dp[digitLeft][sum];

        let ans = 0;
        for(let i = 0; i < 10; i++){
            ans += solve(digitLeft - 1, sum - i);
            ans %= m;
        }
        dp[digitLeft][sum] = ans % m;
        return dp[digitLeft][sum];

    }
    for(let i = 1; i < 10; i++){
        ans += solve(A - 1, B - i);
        ans %= m;
    }
    console.log('ans', ans)
    return ans

}
solves(2, 4)