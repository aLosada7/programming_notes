function findRelativeRanks(nums: number[]): string[] {
    let ranks = {}
    
    for (let num of nums) {
        let highestScores = Object.keys(ranks).filter(x => num < +x )
        
        for (let rank of Object.keys(ranks)) {
            if (num > +rank) ranks[rank] = ranks[rank]+1
        }
        
        ranks[num] = highestScores.length + 1;
    }
    
    let finalRanks = []
    
    for (let num in nums) {
        finalRanks[num] = ranks[nums[num]].toString();
        
        // give medals
        switch(finalRanks[num]){
            case "1": finalRanks[num] = "Gold Medal"; break;
            case "2": finalRanks[num] = "Silver Medal"; break;
            case "3": finalRanks[num] = "Bronze Medal"; break;
            default: break;
        }
    }
    
    return finalRanks;
};

// Mejor solución

var findRelativeRanks2 = function(nums) {
    // create ranks array in descending order
    let ranks = nums.slice(0).sort((a, b) => b - a);
    
    // map places in ranks if no medal
    return nums.map((num, i) => {
       if (num === ranks[0]) return 'Gold Medal';
       else if (num === ranks[1]) return 'Silver Medal';
       else if (num === ranks[2]) return 'Bronze Medal';
       else return (ranks.indexOf(num) + 1).toString();
    });
};
