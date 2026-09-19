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


// 05. Invert Binary Tree
var invertTree = function (root) {
    if (root === null) {
        return null
    }
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
}

// 06. Product of Array Except Self
var productExceptSelf = function (nums) {
    // your code goes here
    let result = new Array(nums.length).fill(1)
    let prefix = 1
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix
        prefix *= nums[i]
    }
    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix
        suffix *= nums[i]
    }
    return result
}

// 07. Rotate Array
var rotate = function (nums, k) {
    // your code goes here
    k = k % nums.length
    nums.reverse()
    let left = 0
    let right = k - 1
    while (left < right) {
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }
    left = k
    right = nums.length - 1
    while (left < right) {
        let temp = nums[left]
        nums[left] = nums[right]
        nums[right] = temp
        left++
        right--
    }
}

// 08. Min Stack
var MinStack = function () {
    // your code goes here
    this.stack = []
    this.minStack = []
}
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val)
    }
}
MinStack.prototype.pop = function () {
    const val = this.stack.pop()
    if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop()
    }
}
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
}
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
}

// 09. Continuous Subarray Sum
var checkSubarraySum = function (nums, k) {
    // your code goes here
    let remainderMap = new Map()
    remainderMap.set(0, -1)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        let remainder = sum % k
        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) >= 2) {
                return true
            }
        } else {
            remainderMap.set(remainder, i)
        }
    }
    return false
}

// 10. Daily Temperatures
var dailyTemperatures = function (temperatures) {
    // your code goes here
    let result = new Array(temperatures.length).fill(0)
    let stack = []
    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            let index = stack.pop()
            result[index] = i - index
        }
        stack.push(i)
    }
    return result
}