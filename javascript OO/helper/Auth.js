export default class Auth
{  
    static login(autenticavel, senha)
    {
        if (Auth.valid(autenticavel)) {
            return autenticavel.autenticado(senha) 
        }
        return false
    }

    static valid(autenticavel) 
    {
        return 'autenticado' in autenticavel &&
        autenticavel.autenticado instanceof Function;
    }
}
