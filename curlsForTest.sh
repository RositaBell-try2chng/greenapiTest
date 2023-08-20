#!/bin/bash
echo "========GET TEST========"
curl -X GET "http://127.0.0.1:8080/123"
echo && echo

echo "========HEAD TEST========"
curl --head "http://127.0.0.1:8080/321"
# echo && echo

echo "========POST TEST========"
curl  -H 'Content-Type: application/json' --data '{"hello":"hello","world":"world"}' "http://127.0.0.1:8080/qwe"
echo && echo

echo "========DELETE TEST========"
curl  -X DELETE "http://127.0.0.1:8080/ewq"
echo && echo