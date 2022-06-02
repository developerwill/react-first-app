import './App.css';
import React from 'react';
import Withparams from './components/basic/withParams/withParams';
import RandomNumber from './components/basic/randomNumber/randomNumber';
import Card from './components/Card';
import StudentCheck from './components/basic/studentCheck/StudentCheck';
import Family from './components/basic/family/family';
import FamilyMember from './components/basic/family/familyMember';
import StudentsList from './components/basic/students/studentsList';
import Event from './components/basic/binding/event';
import Parent from './components/basic/binding/parent';

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
                <div className='col-sm-10 mx-auto'>
                    <Card title="First Challenge" className="alert-success">
                        <RandomNumber min={1} max={10} />

                        <StudentCheck name="John Doe" grade="9.4" />
                        <StudentCheck name="John Doe 2" grade="9.5" />
                    </Card>

                    <Card className="mt-3 alert-dismissible alert-secondary">
                        <Family surname="Reyes">
                            <FamilyMember name="Hugo" />
                            <FamilyMember name="Ana" />
                            <FamilyMember name="Santiago" lastName="Bosques" />
                        </Family>
                    </Card>

                    <Card title="Students" className="mt-3 alert-warning">
                        <StudentsList />
                    </Card>

                    <Card title="Event" className="mt-3 alert-danger">
                        <Event />
                    </Card>

                    <Card title="Parent" className="mt-3 alert-danger">
                        <Parent />
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default App;
