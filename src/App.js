import './App.css';
import React from 'react';
import Withparams from './components/basic/withParams/withParams';
import RandomNumber from './components/basic/randomNumber/randomNumber';
import Card from './components/Card';
import StudentCheck from './components/basic/studentCheck/StudentCheck';
import Family from './components/basic/family/family';

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

            <div className='row'>
                <div className='col-sm-6 mx-auto'>
                    <Card title="First Challenge" className="alert-success">
                        <RandomNumber min={1} max={10} />

                        <StudentCheck name="John Doe" grade="9.4" />
                        <StudentCheck name="John Doe 2" grade="9.5" />
                    </Card>

                    <Card className="mt-3 alert-dismissible alert-secondary">
                        <Family surname="Reys" />
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default App;
