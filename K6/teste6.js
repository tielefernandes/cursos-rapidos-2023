import { check } from 'k6';
import http from 'k6/http';

export default function () {
    const res = http.get('http://test.k6.io/');
    check(res, {
        'body size is 11,278 bytes': (r) => r.body.length == 11278,
    });
    console.log('a quantidade de bytes é igual a ' + res.body.length);
}

// verifica a quantidade de bytes