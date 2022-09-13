import { createRoot } from "react-dom/client";
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <App/>
);

//Notes:
/*
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
*/

/*
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
*/