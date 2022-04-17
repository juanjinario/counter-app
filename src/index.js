import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import FirstApp from './FirstComponent';
import './index.css';

// const greeting = <h1>Hola mundo</h1>;
const divRoot = document.querySelector('#root');
createRoot(divRoot).render(
    <>
        < FirstApp greeting={ `Holardo` } />
        < CounterApp value={ 123 } />
    </>
);
// ReactDOM.render(<FirstApp/>, divRoot);  It's old