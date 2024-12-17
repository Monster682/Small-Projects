public class PermuteString {

    // Function to generate permutations of a string
    public static void generatePermutation(String str, int start, int end) {
        if (start == end) {
            System.out.println(str);
        } else {
            for (int i = start; i < end; i++) {
                // Swap characters at positions 'start' and 'i'
                str = swapString(str, start, i);
                // Recursively generate permutations for the remaining part of the string
                generatePermutation(str, start + 1, end);
                // Backtrack: Swap characters back
                str = swapString(str, start, i);
            }
        }
    }

    // Function to swap characters in the string at positions i and j
    public static String swapString(String str, int i, int j) {
        char[] charArray = str.toCharArray();
        char temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
        return new String(charArray);
    }

    public static void main(String[] args) {
        String str = "ABC";
        generatePermutation(str, 0, str.length());
    }
}
