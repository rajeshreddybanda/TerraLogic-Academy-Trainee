import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define your data types
interface User {
  id: number;
  name: string;
  email: string;
}

interface CreateUserData {
  name: string;
  email: string;
}

const UserExample: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch users example
  const fetchUsers = async () => {
    try {
  setLoading(true);
  setError(null);
  const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Create user example
  const createUser = async (userData: CreateUserData) => {
    try {
  setLoading(true);
  setError(null);
  const response = await axios.post<User>('https://jsonplaceholder.typicode.com/users', userData);
      setUsers(prev => [...prev, response.data]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  // Update user example
  const updateUser = async (id: number, userData: Partial<User>) => {
    try {
  setLoading(true);
  setError(null);
  const response = await axios.put<User>(`https://jsonplaceholder.typicode.com/users/${id}`, userData);
      setUsers(prev => prev.map(user => user.id === id ? response.data : user));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  // Delete user example
  const deleteUser = async (id: number) => {
    try {
  setLoading(true);
  setError(null);
  await axios.delete<void>(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
    } finally {
      setLoading(false);
    }
  };

  // Load users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      
      {/* Example form for creating a user */}
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        createUser({
          name: formData.get('name') as string,
          email: formData.get('email') as string,
        });
      }}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <button type="submit">Add User</button>
      </form>

      {/* Display users */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => updateUser(user.id, { name: `${user.name} Updated` })}>
              Update
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserExample;