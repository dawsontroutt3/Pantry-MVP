function App() {
  const pantryItems = ["Rice", "Eggs", "Black beans", "Milk"];

  return (
    <div>
      <h1>In My Pantry</h1>
      <ul>
        {pantryItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;