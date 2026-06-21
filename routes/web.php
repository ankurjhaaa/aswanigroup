<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('home');
Route::inertia('/about', 'About')->name('about');
Route::inertia('/industries', 'Industries')->name('industries');
Route::inertia('/portfolio', 'Portfolio')->name('portfolio');
Route::inertia('/contact', 'Contact')->name('contact');
