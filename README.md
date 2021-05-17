# QuickSort

Quick sort follows Divide and Conquer algorithm.
It is dividing elements in to smaller parts based on some condition and performing the sort operations on those divided smaller parts.

## Mechanism

1. First select an element which is to be called as pivot element.
2. Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
3. Finally, repeat the same operations on left and right side elements to the pivot element.

## Code

quickSort() performs partition() repeatedly until the array is completely sorted
partition() checks compares the left & right pointer to pivot and calls swap if necessary
swap() swaps the index of element of two pointers
