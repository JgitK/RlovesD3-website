import Rectangle from "./Rectangle";

const App = () => {
  return (
    <div>
      <h1>Component Composition</h1>
      <p>Each rectangle below is a reusable component.</p>
      <div>
        <Rectangle />
        <Rectangle />
        <Rectangle />
      </div>
    </div>
  );
};

export default App;
