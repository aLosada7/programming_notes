function isHappy(n: number): boolean {
    const seen = new Set();
    let sum = 0;
    
    while (sum != 1) {
        if (seen.has(n)) return false;
        
        seen.add(n);
        sum = 0;
        
        [...n+''].forEach((number) => {
            sum += Math.pow(+number, 2);
        })
        
        n = sum;
    }
    
    return true;
};