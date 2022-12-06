import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const mount = (el) => {
        ReactDOM.createRoot(el).render(
                <React.StrictMode>
                        <App />
                </React.StrictMode>
        );
};

if (!window.containerContext) {
        mount(document.getElementById("root"));
}

export { mount };
