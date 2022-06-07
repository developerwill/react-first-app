import './App.css';
import React from 'react';
import Card from './components/Card';
/* import RandomNumber from './components/basic/randomNumber/randomNumber';
import StudentCheck from './components/basic/studentCheck/StudentCheck';
import Family from './components/basic/family/family';
import FamilyMember from './components/basic/family/familyMember';
import StudentsList from './components/basic/students/studentsList';
import Event from './components/basic/binding/event';
import Parent from './components/basic/binding/parent';
import Input from './components/basic/input/input';
import ProductsList from './components/basic/products/productsList';
import Game from './components/basic/game/game'; */
import Navbar from './components/navbar/navbar';
import Content from './components/content';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <div className="container">

                <div className='row'>
                    <div className='col-sm-10 mx-auto'>
                        <Card className="mt-3 alert-info">
                            <Content></Content>
                        </Card>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
