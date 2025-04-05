
#include <stdio.h>
#include <conio.h>
#include <string.h>

// Main function
int main() {
    char str1[20];  // First string
    char str2[20];  // Second string
    int ch, i, j;   // Variables for choice, length, and comparison result

    clrscr();  // Clear the screen

    // Loop to display menu and perform operations
    do {
        // Display menu options
        printf("\n\t MENU");
        printf("\n__________________________\n");
        printf("1. Find the length of String");
        printf("\n2. Get Reverse Of String");
        printf("\n3. Concatenate the String");
        printf("\n4. Copy String");
        printf("\n5. Compare string");
        printf("\n6. Exit");
        printf("\n__________________________\n");
        printf("\n Enter Your Choice:");
        scanf("%d", &ch);  // Get user choice

        switch (ch) {
            case 1:
                // Find the length of the string
                printf("Enter String:");
                scanf("%s", str1);
                i = strlen(str1);  // Get length of the string
                printf("The Length Of Given String is %d", i);
                printf("\n\n");
                break;
            case 2:
                // Get reverse of the string
                printf("Enter String:");
                scanf("%s", str1);
                strrev(str1);  // Reverse the string
                printf("Reversed String: %s", str1);
                printf("\n\n");
                break;
            case 3:
                // Concatenate two strings
                printf("Enter First String:");
                scanf("%s", str1);
                printf("Enter Second String:");
                scanf("%s", str2);
                strcat(str1, str2);  // Concatenate strings
                printf("Concatenate String: %s", str1);
                printf("\n\n");
                break;
            case 4:
                // Copy one string to another
                ▋

