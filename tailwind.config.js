module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Add this line to scan the app directory
    './components/**/*.{js,ts,jsx,tsx}', // Add this line if you have components in this folder
    './src/**/*.{js,ts,jsx,tsx}',  // Add this if you are using src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};