<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SuperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'name'=>'Super Admin',
            'email'=>'admin@esupport.test',
            'password'=>bcrypt('password123'),
            'status'=>'active'
        ]);
        $user->assignRole('super-admin');
    }
}
