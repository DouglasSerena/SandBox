import Diretor from './Pessoas/Funcionario/Diretor.js';
import Gerente from './Pessoas/Funcionario/Gerente.js';
import Auth from './helper/Auth.js';

const gerente = new Gerente("Altair", 90022244411, 10000.00);
const diretor = new Diretor("Ana", 902323233411, 5000.00);

gerente.cadastrarSenha("188888");
diretor.cadastrarSenha("188888");

var check = Auth.login(diretor, '188888');

console.log(check);
