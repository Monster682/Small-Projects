import java.util.Arrays;

public class RemoveDuplicates {
    public static int removeDuplicateElements(int arr[]) {
        if (arr.length == 0) return 0;

        // Sort the array first to make sure duplicates are adjacent
        Arrays.sort(arr);

        int uniqueCount = 1;  // First element is always unique

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[i - 1]) {
                arr[uniqueCount++] = arr[i];  // Place the unique element at the next position
            }
        }

        return uniqueCount;  // Number of unique elements
    }

    public static void main(String[] args) {
        int arr[] = {10, 20, 20, 30, 30, 40, 50, 50};
        int newLength = removeDuplicateElements(arr);

        // Printing the unique elements in the array
        for (int i = 0; i < newLength; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
