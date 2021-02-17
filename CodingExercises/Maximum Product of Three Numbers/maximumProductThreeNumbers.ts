function maximumProduct(nums: number[]): number {
    const numsSorted = nums.sort((a,b) => a-b);
    const length = nums.length;
    
    return Math.max(nums[0] * nums [1] * numsSorted[length - 1], numsSorted[length - 1] * numsSorted[length - 2] * numsSorted[length - 3]);
};