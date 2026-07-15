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

let arr = [5, 4, 3, 2, 1]
console.log(MergeSort(arr))