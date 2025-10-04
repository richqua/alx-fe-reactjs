import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
