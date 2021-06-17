<?php

use App\Http\Controllers\api\UserController;
use App\Http\Controllers\api\EmployeeController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::post('login', [UserController::class, 'login'])->name('login');
Route::post('/register',  [UserController::class, 'register'])->name('register');
Route::group(['middleware' => 'auth:api'], function() {
    
});

Route::get('/employee', [EmployeeController::class,'index']);
// Route::group(['prefix' => 'employee'], function () {
    Route::post('/add', [EmployeeController::class,'add']);
    Route::get('/employee/edit/{id}', [EmployeeController::class,'edit']);
    Route::post('/employee/update/{id}',[EmployeeController::class,'update']);
    Route::delete('/delete/{id}',[EmployeeController::class,'delete']);
// });