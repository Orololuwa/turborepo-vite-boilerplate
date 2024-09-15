import { useAppSelector } from "@repo/redux";
import { useNavigate } from "react-router-dom";

export default function Step1() {
  const count = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();
  return (
    <div>
      <div>STEP 1 {count}</div>
      <div>
        <button onClick={() => navigate("/app-package")}>
          to package home
        </button>
      </div>
      <div>
        <button onClick={() => navigate("/app-package/step-2")}>
          to step-2
        </button>
      </div>
    </div>
  );
}
