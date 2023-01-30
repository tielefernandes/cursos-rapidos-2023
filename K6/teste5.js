import { check } from 'k6';
import http from 'k6/http';

export default function () {
    const res = http.get('http://test.k6.io/');
    check(res, {
        'verify homepage text': (r) =>
            r.body.includes('Collection of simple web-pages suitable for load testing'),
    });
}


// faz check se na no body da resposta da requisição há a mensagem 'Collection of simple web-pages suitable for load testing'