function findMissingNumber(nums) {
    const n = nums.length;
    let total = n * (n + 1) / 2;

    for (let i = 0; i < n; i++) {
        total -= nums[i];
    }

    return total;
}

console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumber([0, 1])); 
