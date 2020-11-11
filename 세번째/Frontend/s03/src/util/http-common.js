const IP ="http://192.168.219.109"
export default{
    BASE_URL: `${IP}:8080`,
    AUTH_URL: `${IP}:8082`,
    ORDER_URL: `${IP}:8083`,
    COMMON_URL: `${IP}:8084`,
    IMG_URL: `${IP}:3000`,
    JSON_HEADER:{
        headers: {
            'Content-Type':'application/json',
            
        }
    },
    
}