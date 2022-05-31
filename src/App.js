import './App.css';
import React from 'react';
import firstComponent from './components/firstComponent/firstComponent';
import Withparams from './components/withParams/withParams';

function App() {
    const variabeWithHtml = <h1 className='text-center'>React rules!</h1>;

    return (
        <div className="container">
            {variabeWithHtml}
            <div className="row">
                <div className="col">One</div>
                <div className="col">One</div>
            </div>

            <div className='row'>
                <Withparams name="John Doe"></Withparams>
            </div>
        </div>
    );
}

export default App;
