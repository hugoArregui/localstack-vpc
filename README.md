
```
docker-compose up -d
cdklocal bootstrap
cdklocal deploy

Outputs:
TestStack.TestApiEndpoint316CA9C6 = https://h1nhe8s5xg.execute-api.localhost.localstack.cloud:4566/prod/
Stack ARN:
arn:aws:cloudformation:us-east-1:000000000000:stack/TestStack/9d55688c
```

No `Access-Control-Allow-Origin` in the response for the preflight request (also a 202 status code is returned, although the doc seems to suggest a 204 should be returned instead):

```
curl -v --location --request OPTIONS 'http://localhost:4566/restapis/h1nhe8s5xg/prod/_user_request_/users' \
--header 'Origin: asdad' \
--header 'Access-Control-Request-Method: DELETE' \
--data ''

* Host localhost:4566 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:4566...
* connect to ::1 port 4566 from ::1 port 46646 failed: Connection refused
*   Trying 127.0.0.1:4566...
* Connected to localhost (127.0.0.1) port 4566
> OPTIONS /restapis/h1nhe8s5xg/prod/_user_request_/users HTTP/1.1
> Host: localhost:4566
> User-Agent: curl/8.7.1
> Accept: */*
> Origin: asdad
> Access-Control-Request-Method: DELETE
> Content-Length: 0
> Content-Type: application/x-www-form-urlencoded
>
* Request completely sent off
< HTTP/1.1 200 OK
< Server: TwistedWeb/24.3.0
< Date: Wed, 15 May 2024 22:31:09 GMT
< Content-Type: application/x-www-form-urlencoded
< Host: localhost:4566
< User-Agent: curl/8.7.1
< Accept: */*
< Origin: asdad
< Access-Control-Request-Method: DELETE
< Content-Length: 19
< X-Forwarded-For: 172.20.0.1, localhost:4566
< x-localstack-edge: http://localhost:4566
<
* Connection #0 to host localhost left intact
{ statusCode: 200 }
```
