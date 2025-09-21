import { useState } from 'react';
import {
    fetchAdvancedUsers,
    fetchUserDetails,
} from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const users = await fetchAdvancedUsers(username, location, minRepos, page);

      // Fetch full details for each user (to get location, repos count, etc.)
      const detailedUsers = await Promise.all(
        users.map((user) => fetchUserDetails(user.login))
      );

      setResults(detailedUsers);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🔍 GitHub Advanced User Search</h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 bg-white p-6 shadow-md rounded-md"
      >
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="p-4 border rounded shadow-sm bg-white flex gap-4 items-center"
          >
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
              <p className="text-gray-500">📍 {user.location || 'No location'}</p>
              <p className="text-gray-500">📦 {user.public_repos} public repos</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && (
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
