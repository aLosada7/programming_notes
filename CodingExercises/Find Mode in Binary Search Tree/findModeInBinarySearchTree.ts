/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

let ocurrences = {}

function findMode(root: TreeNode | null): number[] {    
    traverse(root)
    return getHighestValues()
};

const traverse = (node: TreeNode) => {
    if (ocurrences[node.val]) {
        ocurrences[node.val] = ocurrences[node.val] + 1;
    } else {
        ocurrences[node.val] = 1;
    }
    
    if (node.left) {
        traverse(node.left)
    }
    
    if (node.right) {
        traverse (node.right)
    }
}

const getHighestValues = () => {
    let highestValues = [];
    Object.keys(ocurrences).map(element => {
        if (highestValues.length == 0) highestValues.push(element);
        else element > highestValues[0] ? highestValues = [...element] : 
        element === highestValues[0] ? highestValues.push(element) : null
    });
    
    if (highestValues.length > 1) {
        let element = ""
        for (let value of highestValues) {
            element += value
        }
        highestValues = [...element]
    }
    return highestValues;
}