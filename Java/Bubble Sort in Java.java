public class BubbleSortExample {

    // Function that sorts the array
    public static void bubbleSort(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            for (int j = 1; j < arr.length - i; j++) {
                if (arr[j - 1] > arr[j]) {
                    // Swap elements
                    int temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {3, 60, 35, 2, 45, 320, 5};

        System.out.println("Array Before Bubble Sort: ");
        printArray(arr);

        bubbleSort(arr); // Sorting array using bubble sort

        System.out.println("Array After Bubble Sort: ");
        printArray(arr);
    }

    // Helper function to print the array
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
