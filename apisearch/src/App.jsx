import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [users, setUser] = useState([]);


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);


  useEffect(() => {
    if (!debouncedTerm) {
      setUser([]);
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(debouncedTerm.toLowerCase())
        );
        setUser(filtered);
      });
  }, [debouncedTerm]);


  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">🔍 Debounced User Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search users by name..."
        className="border p-2 rounded w-full mb-4"
      />

      <ul className="space-y-2">
        {users.length > 0 ? (
          users.map((user) => <li key={user.id}>👤 {user.name}</li>)
        ) : (
          <li className="text-gray-500">No users found.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
