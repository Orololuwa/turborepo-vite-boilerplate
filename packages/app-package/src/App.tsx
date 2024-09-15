import { useAppSelector } from "@repo/redux";
import { useNavigate } from "react-router-dom";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();
  return (
    <div>
      <div>App Package {count}</div>
      <div>
        <button onClick={() => navigate("/")}>to home</button>
      </div>
      <div>
        <button onClick={() => navigate("step-1")}>to step 1</button>
      </div>
    </div>
  );
}

export default App;
