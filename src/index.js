import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')); //renderizamos el div
root.render(
<BrowserRouter> 
    <App />
</BrowserRouter>
);

// enrutador general y necesario para administrar las rutas del proyecto.