import React from 'react';
import { Routes, Route } from 'react-router-dom'
import FirstComponent from './basic/firstComponent/firstComponent';
import Game from './basic/game/game';
import Input from './basic/input/input';
import ProductsList from './basic/products/productsList';
import RandomNumber from './basic/randomNumber/randomNumber';
import StudentCheck from './basic/studentCheck/StudentCheck';
import StudentsList from './basic/students/studentsList';
import Withparams from './basic/withParams/withParams';
import Family from './basic/family/family';
import FamilyMember from './basic/family/familyMember';
import Parent from './basic/binding/parent';
import Event from './basic/binding/event';
import PageNotFound from '../views/404';

const Content = (props) => {
    return (
        <main className='content'>
            <Routes>
                <Route path="/" element={<FirstComponent />} />

                {/* There's gotta be a better way to do this */}
                <Route path="/family" element={<Family surname="Reyes">
                    <FamilyMember name="Hugo" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Santiago" />
                </Family>} />
                <Route path="/random-number" element={<RandomNumber min={1} max={100} />} />

                <Route path="/binding-parent" element={<Parent />}></Route>
                <Route path="/binding-event" element={<Event />}></Route>
                <Route path="/game" element={<Game min={1} max={20} />} />
                <Route path="/input" element={<Input />} />
                <Route path="/products-list" element={<ProductsList />} />
                <Route path="/student-check" element={<StudentCheck />} />
                <Route path="/students" element={<StudentsList />} />
                <Route path="/with-params" element={<Withparams name="John Doe" />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </main>
    );
}
export default Content;