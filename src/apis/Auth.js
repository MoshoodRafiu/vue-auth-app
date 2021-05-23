import Api from './Api';
import Csrf from './Csrf';

export default {
    async register(credentials){
        await Csrf.getCookie();
        return Api.post('/auth/register', credentials);    
    }
}