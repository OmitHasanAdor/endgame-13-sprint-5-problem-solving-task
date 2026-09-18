// 01. Remove Duplicates from Sorted Array
var checkSubarraySum = function (nums, k) {
    // your code goes here
    let unique = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[unique] = nums[i]
            unique++
        }
    }
    return unique
}

// 02. Binary Search
var search = function (nums, target) {
    // your code goes here
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

// 03. Search Insert Position
var searchInsert = function (nums, target) {
    // your code goes here
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

// 04. Maximum Depth of Binary Tree
var maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    let leftDepth = maxDepth(root.left)
    let rightDepth = maxDepth(root.right)
    return Math.max(leftDepth, rightDepth) + 1
}
