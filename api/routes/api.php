<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\InventoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('listProduct', [InventoryController::class, 'list_product']);
Route::post('createProduct', [InventoryController::class, 'create_product']);
Route::put('updateProduct', [InventoryController::class, 'update_product']);
Route::delete('deleteProduct', [InventoryController::class, 'delete_product']);

