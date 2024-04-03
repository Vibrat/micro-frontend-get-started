import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Basic as Basic1 } from "./components/basic";

const Basic = React.lazy(() => import("app3/basic"));

const root = createRoot(document.getElementById("root2"));
root.render(
  <Provider store={window.store}>
    <Basic1 />
    <Suspense fallback={"loading"}>
      <Basic />
    </Suspense>
  </Provider>
);
