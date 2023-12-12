import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import App from "./App";
import {StateProvider} from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <StateProvider>
        <App/>
    </StateProvider>
);