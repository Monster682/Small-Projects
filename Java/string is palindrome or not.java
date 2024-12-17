public class PalindromeString {

    public static void main(String[] args) {
        String string = "Kayak";

        // Convert the string to lowercase and check if it's a palindrome
        String lowerString = string.toLowerCase();

        if (lowerString.equals(new StringBuilder(lowerString).reverse().toString())) {
            System.out.println("Given string is palindrome");
        } else {
            System.out.println("Given string is not a palindrome");
        }
    }
}
