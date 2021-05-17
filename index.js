
const swap = (items, leftIndex, rightIndex) =>
{
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partition = (items, leftIndex, rightIndex) =>
{
    var pivot = items[ Math.floor( (rightIndex + leftIndex) / 2) ]

    while (leftIndex <= rightIndex)
    {
        while (items[leftIndex] < pivot) { leftIndex++; }
        while (items[rightIndex] > pivot) { rightIndex--; }
        if (leftIndex <= rightIndex)
        {
            swap(items, leftIndex, rightIndex); //swapping two elements
            leftIndex++; rightIndex--;
        }
    }

    return leftIndex;
}

const quickSort = (items, left, right) =>
{
    var index;

    if (items.length > 1)
    {

        //index returned from partition
        index = partition(items, left, right);

        // more elements on the left side of the pivot
        if (left < index - 1) quickSort(items, left, index - 1);

        // more elements on the right side of the pivot
        if (index < right) quickSort(items, index, right);

    }

    return items;
}

const items = [5, 3, 7, 6, 2, 9];
const sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);