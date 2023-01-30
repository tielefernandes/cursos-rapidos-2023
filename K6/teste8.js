import http from 'k6/http';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%
        http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
}


// thresholds -> são as definições de limites para os testes, ou seja,  
//               as requisições com erro devem ser menores que 1% no 
//               resultado dos testes   


// k6 run --vus 100 --duration 30s teste8.js   ->> para rodar com 100 usuários