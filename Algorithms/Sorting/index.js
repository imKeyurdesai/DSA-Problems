function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

function SelectionSort(arr) {
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

function InsertionSort(arr) {
    const n = arr.length
    for (let i = 1; i < n; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr
}

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

        return res
    }

    if (arr.length <= 1) {
        return arr
    }

    const mid = Math.floor((arr.length) / 2)
    const left = MergeSort(arr.slice(0, mid))
    const right = MergeSort(arr.slice(mid))

    return merge(left, right)
}

function QuickSort(arr, low, high) {
    const partition = (arr, low, high) => {
        const pivot = arr[high]
        let i = low - 1
        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]

        return i + 1
    }

    if (low < high) {
        const pivotIndex = partition(arr, low, high)
        QuickSort(arr, low, pivotIndex - 1)
        QuickSort(arr, pivotIndex + 1, high)
    }
}

let arr = [8, 3, 1, 7, 0, 10, 2]
QuickSort(arr, 0, arr.length - 1)
console.log(arr)