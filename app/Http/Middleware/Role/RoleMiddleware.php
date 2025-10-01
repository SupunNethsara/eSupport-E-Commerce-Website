<?php

namespace App\Http\Middleware\Role;

use Closure;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next, $role)
    {
        if (! $request->user() || ! $request->user()->hasRole($role)) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        return $next($request);
    }
}
