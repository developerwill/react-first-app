import './App.css';
import React from 'react';
import firstComponent from './components/firstComponent/firstComponent';

function App() {
    const variabeWithHtml = <h1 className='text-center'>React rules!</h1>;

    return (
        <div className="container">
            {variabeWithHtml}
            <div className="row">
                <div className="col">One</div>
                <div className="col">One</div>
            </div>
        </div>
    );
}

export default App;
