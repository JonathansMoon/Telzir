echo Copying the configuration example file
docker exec -it falemais-app cp .env.example .env

echo Install dependencies
docker exec -it falemais-app composer install

echo Make migrations
docker exec -it falemais-app php artisan migrate

echo Make seeder
docker exec -it falemais-app php artisan db:seed
