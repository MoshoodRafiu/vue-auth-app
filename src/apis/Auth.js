import Api from './Api';
import Csrf from './Csrf';

export default {
    async register(credentials){
        await Csrf.getCookie();
        return Api.post('/auth/register/spa', credentials);
    },
    async login(credentials){
        await Csrf.getCookie();
        return Api.post('/auth/login/spa', credentials);
    },
    async logout(){
        await Csrf.getCookie();
        return Api.post('/auth/logout/spa');
    },
    async user(){
        await Csrf.getCookie();
        return Api.get('/user');
    }
}