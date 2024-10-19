import { Suspense, useEffect } from "react";
import { AppRouter } from "./provider/router";
import "./styles/index.css";
import { Loader } from "../widgets/Loader";

function App() {
  //! Код для перевірки ErrorBoundary

  // useEffect(() => {
  //   if (Math.random() > 0.5) {
  //     throw new Error();
  //   }
  // }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </>
  );
}

export default App;
