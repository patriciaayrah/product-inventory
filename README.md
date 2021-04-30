# product-inventory
Product Inventory

1. git clone https://github.com/patriciaayrah/product-inventory.git
2. composer install
3. cp .env.example .env
4. php artisan key:generate

5. Create an empty DATABASE for our application

6. Fill up the databse connection inside the .env file
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

7. Migrate Databe table
- php artisan migrate or php artisan migrate:fresh --path=/database/migrations/2021_04_29_181741_create_inventories_table.php

8. run the application by entering command in terminal
- php artisan serve

9. Open the index.html inside product-ui. 

10. Application is now ready to use!

