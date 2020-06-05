#include <iostream>
#include <string.h>

using namespace std;

int main()
{
	int result;
	result = 231%11;
	printf("%d",result);
}

// char* check_cpf(char cpf[], short* nums)
// {
// 	short nums_multiplicados[11];
// 	short nums_originais[11];
// 	int numeros = 0;
// 	int multiplicador = 10;
// 	int soma = 0;
// 	int resto = 0;
// 	int digito = 0;
// 	for(int i = 0; i < 9; i++)
// 	{
// 		numeros = 0;
// 		if(cpf[i] >= '0' && cpf[i] <= '9')
// 		{
// 			nums_originais[i] = cpf[i] - '0';
// 			nums_multiplicados[i] = nums_originais[i];
// 			nums_multiplicados[i] = nums_multiplicados[i] * multiplicador--;
// 		}
// 		soma += nums_multiplicados[i];
// 	}
// 	resto = soma % 11;
// 	if(resto != 0 && resto != 1)
// 	{
// 		digito = 11 - resto;
// 	}

// 	nums_originais[9] = digito;
// 	cpf[9] = '0' + digito;
// 	multiplicador = 11;
// 	soma = 0;
// 	resto = 0;
// 	digito = 0;
// 	for(int i = 0; i < 10; i++)
// 	{

// 		nums_multiplicados[i] = nums_originais[i];
// 		nums_multiplicados[i] = nums_multiplicados[i] * multiplicador--;
// 		soma += nums_multiplicados[i];
// 	}
// 	resto = soma % 11;
// 	if(resto != 0 && resto != 1)
// 	{
// 		digito = 11 - resto;
// 	}
// 	nums_originais[10] = digito;
// 	cpf[10] = '0' + digito;
// 	for(int i = 0; i < 11; i++)
// 	{
// 		nums[i] = nums_originais[i];
// 	}
// 	return cpf;
// }

// void cpf_lugar(char cpf[])
// {
// 	switch(cpf[8])
// 	{
// 	case '0':
// 		cout << "Rio Grande do Sul" << endl;
// 		break;
// 	case '1':
// 		cout << "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins" << endl;
// 		break;
// 	case '2':
// 		cout << "Amazonas, Pará, Roraima, Amapá, Acre e Rondônia" << endl;
// 		break;
// 	case '3':
// 		cout << "Ceará, Maranhão e Piauí" << endl;
// 		break;
// 	case '4':
// 		cout << "Paraíba, Pernambuco, Alagoas e Rio Grande do Norte" << endl;
// 		break;
// 	case '5':
// 		cout << "Bahia e Sergipe" << endl;
// 		break;
// 	case '6':
// 		cout << "Minas Gerais" << endl;
// 		break;
// 	case '7':
// 		cout << "Rio de Janeiro e Espírito Santo" << endl;
// 		break;
// 	case '8':
// 		cout << "São Paulo" << endl;
// 		break;
// 	case '9':
// 		cout << "Paraná e Santa Catarina" << endl;
// 		break;
// 	}
// }

// //078539806-63 cpf falso para testes

// int main(int argc, char *argv[])
// {
// 	short num_cpf[11];
// 	char cpf[11];
// 	strcpy(cpf, "04795721009");
// 	cout << check_cpf(cpf, num_cpf) << endl;
// 	return 0;
// }