import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const mountMain = (el) => {
        ReactDOM.createRoot(el).render(
                <React.StrictMode>
                        <App />
                </React.StrictMode>
        );
};

if (!window.containerContext) {
        mountMain(document.getElementById("root"));
}

export { mountMain };
