import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  
  stages: [
    { duration: '2m', target: 200 },   
    { duration: '2m', target: 500 },   
    { duration: '2m', target: 1000 },  
  ],
};

export default function () {
  
  const url = 'http://localhost:3000/checkout/crypto';
  
  const payload = JSON.stringify({ data: 'payload_para_criptografia' });
  const params = { headers: { 'Content-Type': 'application/json' } };

  const res = http.post(url, payload, params);

  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  sleep(1);
}