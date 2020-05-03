#include <stdio.h>

void main() {
    int idade;
    float imc, peso, altura;
    char usuario[25];

    printf("CODIGO PARA SABER SE VOCÊ ESTA SE ALIMENTANDO BEM!!!\n");
    printf("QUAL È SEU NOME : ");
    scanf("%s", &usuario);
    getchar();
    printf("QUAL É SUA IDADE : ");
    scanf("%i", &idade);
    printf("QUAL É SEU PESO : ");
    scanf("%f", &peso);
    printf("QUAL É SUA ALTURA : ");
    scanf("%f", &altura);

    altura = altura/100;
    imc = peso/(altura*altura);
    printf("=> %s com %i anos ", usuario, idade);
    if(imc < 19) {
        printf("você precisa se alimentar melhor.");
    }else if(imc < 24.9) {
        printf("você está se alimentando bem.");
    }else if(imc < 29.9) {
        printf("você esta sobre peso."); 
    }else if(imc < 34.90) {
        printf("você esta com obesidade grau 1.");
    }else if(imc < 39.9) {
        printf("você esta com obesidade grau 2.");
    }else {
        printf("você esta com obesidade morbida.");
    }

    return 0;
}