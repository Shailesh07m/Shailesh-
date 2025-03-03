#include<stdio.h>

int main()
{
    int n;
    printf("Enter Size Of an Arry:");
    scanf("%d",&n);
    int arr[n];
    for(int i=0; i<n; i++) {
        printf("Enter %d Element Of an Array:",i+1);
        scanf("%d",&arr[i]);
    }
    
    for(int i=0; i<n-1; i++) {
        int flag=1;
        for(int j=0; j<=n-1-i; j++) {
            if(arr[j]<arr[j+1]) {
                int temp=arr[j];
                arr[j]= arr[j+1];
                arr[j+1]=temp;
                flag=0;
            }
        }
        if(flag==1)
            break;
    }
    for(int i=0; i<n; i++) {
        printf("%d ",arr[i]);
    }
    return 0;
}