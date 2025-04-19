#include <stdio.h>
#include <conio.h>
#include <math.h>

void menu();
double division(double a, double b);
int modulus(int a, int b);

void main() {
    int choice;
    double first, second, result;
    clrscr();  // Clears the screen

    while (1) {
        menu();
        scanf("%d", &choice);

        if (choice == 7) {
            break;
        }

        if (choice < 1 || choice > 7) {
            printf("\nInvalid Menu Choice.\n");
            continue;
        }

        printf("\nPlease Enter The First Number: ");
        scanf("%lf", &first);
        printf("Now Enter The Second Number: ");
        scanf("%lf", &second);

        switch (choice) {
            case 1:
                result = first + second;
                printf("\nResult Of Operation is: %.2f", result);
                break;
            case 2:
                result = first - second;
                printf("\nResult Of Operation is: %.2f", result);
                break;
            case 3:
                result = first * second;
                printf("\nResult Of Operation is: %.2f", result);
                break;
            case 4:
                result = division(first, second);
                if (result != 5)
                    printf("\nResult Of Operation is: %.2f", result);
                break;
            case 5:
                if ((int)second == 0)
                    printf("\nInvalid Argument For Modulus.");
                else
                    printf("\nResult Of Operation is: %d", modulus((int)first, (int)second));
                break;
            case 6:
                result = pow(first, second);
                printf("\nResult Of Operation is: %.2f", result);
                break;
        }

        getch();  // Waits for a key press before repeating
        clrscr(); // Clears the screen again for next loop
    }
}

double division(double a, double b) {
    if (b == 0) {
        printf("\nInvalid Argument For Division.");
        return 5;
    } else {
        return a / b;
    }
}

int modulus(int a, int b) {
    return a % b;
}

void menu() {
    printf("\n______________________________\n");
    printf("Welcome to Simple Calculator\n");
    printf("Choose one of the following Options:\n");
    printf(" 1. Add\n");
    printf(" 2. Subtract\n");
    printf(" 3. Multiply\n");
    printf(" 4. Division\n");
    printf(" 5. Modulus\n");
    printf(" 6. Power\n");
    printf(" 7. Exit\n");
    printf("Enter Your Choice: ");
}
