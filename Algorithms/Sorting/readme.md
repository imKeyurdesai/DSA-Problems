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
