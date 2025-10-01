<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name'=>'super-admin']);
        Role::create(['name'=>'client-admin']);
        Role::create(['name'=>'vendor']);
        Role::create(['name'=>'customer']);
        Role::create(['name'=>'delivery-agent']);
    }
}
