import "./App.css";
import CounterPlain from "./components/StateManagement/ReduxAndToolKit/CounterPlain";
import CounterToolkit from "./features/counter/CounterToolkit.jsx";

function App() {
  return (
    <>
      <div className="card">
        {/* <CounterPlain /> */}
        <hr />
        <CounterToolkit />
      </div>
    </>
  );
}

export default App;
