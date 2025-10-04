import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = 'Recipe title is required';
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Please list at least two ingredients (one per line)';
    }

    if (!steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'),
      instructions: steps.split('\n'),
      summary: steps.split('\n')[0], // Optional: use first step as summary
      image: 'https://via.placeholder.com/150', // Placeholder
    };

    console.log('Recipe Submitted:', newRecipe);
    alert('Recipe submitted! (check console for data)');

    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="e.g., Veggie Pasta"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients (one per line)</label>
          <textarea
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="e.g.,\n- 200g pasta\n- 1 bell pepper"
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps (one per line)</label>
          <textarea
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="e.g.,\n1. Boil water\n2. Add pasta\n3. Stir occasionally"
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
