# greenapiTest
NodeJS + RabbitMQ

Обработка GET/HEAD/POST/DELETE запросов.

Инструкция по развертыванию:
1. Скачать репозиторий
2. Зайти в корневую папку репозитория
3. Выполнить команду docker-compose up
4. Дождаться запуска контейнеров и установки необходимых модулей. (в логах контейнера m1 - сообщение "port M1 = 8080", в логах m2 - "'M2 Start").
5. Для простых тестов можно запустить bash скрипт curlsForTest.sh, в нем же примеры curl.
