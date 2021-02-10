import http from 'k6/http';
import { sleep, check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export let options = {
  stages: [
    { duration: '2s', target: 100 },
    { duration: '5s', target: 200 },
    { duration: '2s', target: 500 },
    { duration: '5s', target: 500 },
    { duration: '2s', target: 1000 },
    { duration: '5s', target: 1000 },
    { duration: '2s', target: 1500 },
    { duration: '5s', target: 1000 },
    { duration: '5s', target: 100 },
  ],
};

export default function main() {
  let response;
  response = http.get(`http://localhost:3002/api/users/${(Math.floor(Math.random() * 10000000) + 1)}/favorites`);
  // Automatically added sleep
  sleep(.1);
}