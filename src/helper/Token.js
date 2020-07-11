export const get_token = () =>{
    return localStorage.getItem('token').substr(15,40);
    
}
