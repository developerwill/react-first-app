import './App.css';
import React from 'react';

function App() {
    const variabeWithHtml = <h1 className='text-center'>React rules!</h1>;

    return (
        <div className="container">
            {variabeWithHtml}
            <div class="row">
                <div class="col">One</div>
                <div class="col">One</div>
            </div>
        </div>
    );
}

export default App;
