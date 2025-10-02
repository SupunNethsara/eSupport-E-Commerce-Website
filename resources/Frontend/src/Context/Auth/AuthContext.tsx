import  { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children } :{children :any}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null);

    axios.defaults.baseURL = 'http://localhost:8000/api';

    useEffect(() => {
        const storedToken : string |null = localStorage.getItem('token');
        const storedUser : string |null = localStorage.getItem('user');

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        }
        setLoading(false);
    }, []);

    const register = async (userData : any) => {
        try {
            const response = await axios.post('/register', userData);

            const { token: newToken, user: newUser } = response.data;

            localStorage.setItem('token', newToken);
            localStorage.setItem('user', JSON.stringify(newUser));
            setToken(newToken);
            setUser(newUser);

            axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

            return { success: true, data: response.data };
        } catch (error : any) {
            const errorMessage = error.response?.data?.message ||
            error.response?.data?.errors ?
                Object.values(error.response.data.errors).flat().join(', ') :
                'Registration failed';
            return { success: false, error: errorMessage };
        }
    };


    const login = async (credentials : any) => {
        try {
            const response = await axios.post('/login', credentials);

            const { token: newToken, user: newUser } = response.data;

            localStorage.setItem('token', newToken);
            localStorage.setItem('user', JSON.stringify(newUser));
            setToken(newToken);
            setUser(newUser);

            axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

            return { success: true, data: response.data };
        } catch (error : any) {
            const errorMessage = error.response?.data?.message || 'Login failed';
            return { success: false, error: errorMessage };
        }
    };


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);
        setUser(null);
        delete axios.defaults.headers.common['Authorization'];
    };

    // Get user profile
    const getProfile = async () => {
        try {
            const response = await axios.get('/profile');
            setUser(response.data.user);
            return { success: true, data: response.data };
        } catch (error) {
            return { success: false, error: 'Failed to fetch profile' };
        }
    };

    const value = {
        user,
        token,
        loading,
        register,
        login,
        logout,
        getProfile,
        isAuthenticated: !!user && !!token
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
