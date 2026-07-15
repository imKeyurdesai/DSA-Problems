# Sorting Algorithms

This folder contains classic comparison-based sorting algorithms with concise explanations, implementations, and complexity notes.

## 1. Bubble Sort

### Description

Bubble Sort repeatedly swaps adjacent elements when they are in the wrong order. It is simple to understand, but not efficient for large data sets because its average and worst-case time complexity are high.

Bubble Sort is stable, so equal elements keep their original order.

### Simple Bubble Sort

```javascript
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
```

### Optimized Bubble Sort

```javascript
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return arr;
}
```

### Complexity

| Case             | Time   | Space |
| ---------------- | ------ | ----- |
| Best (optimized) | O(n)   | O(1)  |
| Average          | O(n^2) | O(1)  |
| Worst            | O(n^2) | O(1)  |

## 2. Selection Sort

### Description

Selection Sort is a comparison-based sorting algorithm. It sorts by repeatedly selecting the smallest element from the unsorted portion and swapping it with the first unsorted element.

### Implementation

```javascript
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}
```

### Complexity

| Case    | Time   | Space |
| ------- | ------ | ----- |
| Best    | O(n^2) | O(1)  |
| Average | O(n^2) | O(1)  |
| Worst   | O(n^2) | O(1)  |

## 3.Insertion sort

### Description

Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list. It is like sorting playing cards in your hands. You split the cards into two groups: the sorted cards and the unsorted cards. Then, you pick a card from the unsorted group and put it in the right place in the sorted group.

### Implementation

```javascript
function InsertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

### Complexity

| Case    | Time   | Space |
| ------- | ------ | ----- |
| Best    | O(n)   | O(1)  |
| Average | O(n^2) | O(1)  |
| Worst   | O(n^2) | O(1)  |

## Merge Sort

### Description

Merge sort is a popular sorting algorithm known for its efficiency and stability. It follows the Divide and Conquer approach. It works by recursively dividing the input array into two halves, recursively sorting the two halves and finally merging them back together to obtain the sorted array.

### Implementation

```javascript
function MergeSort(arr) {
  const merge = (left, right) => {
    let res = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        res.push(left[i]);
        i++;
      } else {
        res.push(right[j]);
        j++;
      }
    }
    while (i < left.length) {
      res.push(left[i]);
      i++;
    }
    while (j < right.length) {
      res.push(right[j]);
      j++;
    }

    return res;
  };

  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = MergeSort(arr.slice(0, mid));
  const right = MergeSort(arr.slice(mid));

  return merge(left, right);
}
```

### Complexity

| Case    | Time        | Space |
| ------- | ----------- | ----- |
| Best    | O(n\*log n) | O(n)  |
| Average | O(n\*log n) | O(n)  |
| Worst   | O(n\*log n) | O(n)  |

## Quick Sort

### Description

Quick sort is a divide-and-conquer sorting algorithm. It picks a pivot element, partitions the array around that pivot, and then recursively sorts the two partitions.

It is usually very fast in practice and performs well on large arrays, though its worst-case time complexity can degrade when the pivot choices are poor.

### Implementation

```javascript
function QuickSort(arr, low, high) {
  const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return i + 1;
  };

  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    QuickSort(arr, low, pivotIndex - 1);
    QuickSort(arr, pivotIndex + 1, high);
  }
}
```

### Complexity

| Case    | Time        | Space    |
| ------- | ----------- | -------- |
| Best    | O(n\*log n) | O(log n) |
| Average | O(n\*log n) | O(log n) |
| Worst   | O(n^2)      | O(n)     |
