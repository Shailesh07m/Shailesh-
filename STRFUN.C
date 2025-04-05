#include<stdio.h>
#include<conio.h>
#include<string.h>
int main(){
char str1[20];
char str2[20];
int ch,i , j;
clrscr();
do{
printf("\n\t MENU");
printf("\n__________________________\n");
printf("1. Find the length of String");
printf("\n2. Get Reverse Of String");
printf("\n3. Concatenate the String");
printf("\n4.Copy String");
printf("\n5.Compare string");
printf("\n6.Exit");
printf("\n__________________________\n");
printf("\n Enter Your Choice:");
scanf("%d",&ch);

switch(ch){
case 1: printf("Enter String:");
scanf("%s",&str1);
i=strlen(str1);
printf("The Length Of Given String is %d",i);
printf("\n");
printf("\n");
break;
case 2: printf("Enter String:");
scanf("%s",&str1);
strrev(str1);
printf("Reversed String: %s",str1);
printf("\n");
printf("\n");
break;
case 3:
printf("Enter First String:");
 scanf("%s",&str1);
printf("Enter Second String:");
scanf("%s",&str2);
strcat(str1,str2);
printf("Concatenate String: %s",str1);
printf("\n");
printf("\n");
break;
case 4:
printf("Enter First String");
scanf("%s",&str1);
printf("\nEnter Second String :");
scanf("%s",&str2);
printf("Before Copying String 1= %s \n  String 2= %s",str1,str2);
printf("\nWe are Copying String 1 Into String 2");
strcpy(str2,str1);
printf("\nString2 After Copying:%s ",str2);
printf("\n");
printf("\n");
break;
case 5:
printf("Enter First String :");
scanf("%s",&str1);
printf("\n Enter Second String:");
scanf("%s",&str2);
j=strcmp(str1,str2);
if(j==0)
printf("String Are Same");
else
printf("String Are Not Same");
printf("\n");
printf("\n");
break;
case 6:
exit();
break;
default:
printf("Invalid Input Please Select From Option Given Above");
break;
}
}while(ch!=6);
getch();
return 0;
 }




               
