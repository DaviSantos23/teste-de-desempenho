import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },  
    { duration: '10s', target: 300 }, 
    { duration: '1m', target: 300 },  
    { duration: '10s', target: 10 },  
  ],
};

export default function () {

  const url = 'http://localhost:3000/checkout/simple';
  
  const payload = JSON.stringify({ item: 'ingresso_promocional', qtd: 2 });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);

  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  sleep(1);
}