function triangle(num) {
    let solve;
    for (let i = 1; i <= num; i++) {
        solve = 0
        for (let j = 0; j <= i; j++) 
            solve += j;
        console.log(`triangle (${i}) = ${solve}`);
    }
    return solve

}

triangle(6);