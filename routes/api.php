<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class,'register']);
Route::post('/login', [AuthController::class,'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class,'logout']);
    Route::get('/profile', [AuthController::class,'profile']);
});
Route::middleware(['auth:sanctum','role:super-admin'])->get('/admin/dashboard', function(){
    return "Welcome Super Admin!";
});
Route::middleware(['auth:sanctum','role:super-admin|client-admin'])->group(function () {
    Route::post('/users/{id}/approve', [AdminController::class,'approveUser']);
    Route::post('/users/{id}/reject', [AdminController::class,'rejectUser']);
});
