<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function approveUser($id)
    {
        $user = User::findOrFail($id);
        $user->status = 'active';
        $user->save();

        return response()->json(['message'=>'User approved successfully']);
    }

    public function rejectUser($id)
    {
        $user = User::findOrFail($id);
        $user->status = 'rejected';
        $user->save();

        return response()->json(['message'=>'User rejected']);
    }

}
