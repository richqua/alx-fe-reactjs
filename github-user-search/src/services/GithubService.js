import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_TOKEN}`,
  },
});

/**
 * Basic user fetch by username (for simple search)
 */
export const fetchUserData = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

/**
 * Advanced user search using GitHub's search API
 */
export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  let query = '';

  if (username) query += `user:${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>${minRepos}`;

  const response = await api.get(
    `/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`
  );
  return response.data.items;
};

/**
 * Fetch detailed user data by username
 */
export const fetchUserDetails = async (username) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};
