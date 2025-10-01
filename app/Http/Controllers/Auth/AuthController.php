<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(RegisterRequest $request){
        $validated = $request->validated();
        $role = $validated['role'] ?? 'customer';

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'status' => in_array($role, ['vendor','delivery-agent']) ? 'pending' : 'active',
        ]);
        $user->assignRole($role);

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'role' => $user->getRoleNames(),
            'token' => $token
        ], 201);
    }
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        $user = User::where('email', $credentials['email'])->first();

        if (! $user || ! Hash::check($credentials['password'], $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Invalid credentials'],
            ]);
        }

        if (in_array($user->getRoleNames()->first(), ['vendor','delivery-agent']) && $user->status !== 'active') {
            return response()->json(['message'=>'Account pending approval'], 403);
        }

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'user' => $user,
            'role' => $user->getRoleNames(),
            'token' => $token
        ]);
    }
    public function profile(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
            'roles' => $request->user()->getRoleNames()
        ]);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message'=>'Logged out successfully']);
    }
}
