import { useAppSelector } from "@repo/redux";
import { useNavigate } from "react-router-dom";

export default function Step2() {
  const count = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();
  return (
    <div>
      <div>STEP 2 {count}</div>
      <div>
        <button onClick={() => navigate("/app-package")}>
          to package home
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/app-package/step-1")}>
          back to step-1
        </button>
      </div>
    </div>
  );
}
