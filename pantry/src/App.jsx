function App() {
  const pantryItems = ["Rice", "Eggs", "Black beans"];

  return (
    <div>
      <h1>Pantry</h1>
      <ul>
        {pantryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;