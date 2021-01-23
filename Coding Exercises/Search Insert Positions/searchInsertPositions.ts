function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length;
    let mid = 0;
    
    if (end === 1) return nums[0] >= target ? 0 : 1;
    
    while (start <= end) {
        if (start === (end -1)) {
            return target <= nums[start] ? start : (target <= nums[end] ? start + 1 : end);
        }
        
        mid = Math.floor((start + end)/2);
        
        if (nums[mid] === target) return mid;
    
        if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    
    return mid;
};