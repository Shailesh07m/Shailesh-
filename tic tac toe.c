#include<stdio.h>
#include<conio.h>
void pboard();
int win();
void system();
char board[]= {'0','1','2','3','4','5','6','7','8','9'};
void main()
{   int player=1,input, status=-1;
    pboard();
    while(status==-1) {
        player =(player%2==0)?2:1;
        char mark=(player==1)?'X':'O';
        printf("Please enter Number for Player %d",player);
        scanf("%d",&input);
        if(input<1&&input>9)
            printf("Invalid Number");
        board[input]=mark;
        pboard();
        int result=win();
        if(result==1) {
            printf("Player %d is Winner",player);
            return;
        }
        else if(result==0) {
            printf("DRAW");
            return;
        }
        player ++;

    }

}
void pboard () {
    clrscr();
    printf("    |    |    \n");
    printf(" %c  | %c  |  %c \n",board[1],board[2],board[3]);
    printf("____|____|____\n");
    printf("    |    |    \n");
    printf(" %c  | %c  | %c \n",board[4],board[5],board[6]);
    printf("____|____|____\n");
    printf("    |    |    \n");
    printf(" %c  |  %c |  %c  \n",board[7],board[8],board[9]);
    printf("    |    |    \n");
}
int win() {
    if(board[1]==board[2]&&board[2]==board[3])
        return 1;
    if(board[1]==board[4]&&board[4]==board[7])
        return 1;
    if(board[7]==board[8]&&board[8]==board[9])
        return 1;
    if(board[3]==board[6]&&board[6]==board[9])
        return 1;
    if(board[1]==board[5]&&board[5]==board[9])
        return 1;
    if(board[3]==board[5]&&board[5]==board[7])
        return 1;
    if(board[2]==board[5]&&board[5]==board[8])
        return 1;
    if(board[4]==board[5]&&board[5]==board[6])
        return 1;
    
    int count=0;
    for(int i=1; i<=9; i++) {
        if(board[i]=='X'||board[i]=='O')
            count++;

    }
    if(count ==9)
        return 0;
    else 
        return -1;
}
