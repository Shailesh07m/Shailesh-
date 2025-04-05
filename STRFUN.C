#include<stdio.h>
#include<conio.h>
#include<string.h>

// Main function
int main(){
    char str1[20];  // Array to store first string
    char str2[20];  // Array to store second string
    int ch, i, j;   // Variables for choice, length, and comparison result

    clrscr();  // Clear screen

    do {
        // Display menu
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
        scanf("%d", &ch);  // Read user choice

        switch (ch) {
            case 1:  // Find the length of the string
                printf("Enter String:");
                scanf("%s", str1);
                i = strlen(str1);  // Calculate length
                printf("The Length Of Given String is %d", i);
                printf("\n");
                printf("\n");
                break;

            case 2:  // Get reverse of the string
                printf("Enter String:");
                scanf("%s", str1);
                strrev(str1);  // Reverse the string
                printf("Reversed String: %s", str1);
                printf("\n");
                printf("\n");
                break;

            case 3:  // Concatenate the strings
                printf("Enter First String:");
                scanf("%s", str1);
                printf("Enter Second String:");
                scanf("%s", str2);
                strcat(str1, str2);  // Concatenate strings
                printf("Concatenate String: %s", str1);
                printf("\n");
                printf("\n");
                break;

            case 4:  // Copy string
                printf("Enter First String:");
                scanf("%s", str1);
                printf("\nEnter Second String:");
                scanf("%s", str2);
                printf("Before Copying String 1= %s \n  String 2= %s", str1, str2);
                printf("\nWe are Copying String 1 Into String 2");
                strcpy(str2, str1);  // Copy string
                printf("\nString2 After Copying:%s ", str2);
                printf("\n");
                printf("\n");
                break;

            case 5:  // Compare strings
                printf("Enter First String:");
                scanf("%s", str1);
                printf("\n Enter Second String:");
                scanf("%s", str2);
                j = strcmp(str1, str2);  // Compare strings
                if (j == 0)
                    printf("Strings Are Same");
                else
                    printf("Strings Are Not Same");
                printf("\n");
                printf("\n");
                break;

            case 6:  // Exit
                exit();
                break;

            default:  // Invalid input
                printf("Invalid Input Please Select From Option Given Above");
                break;
        }
    } while (ch != 6);

    getch();  // Wait for key press
    return 0;
}
