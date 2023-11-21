import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import App from "./App";
import {store} from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);