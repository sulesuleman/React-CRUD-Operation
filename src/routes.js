import React from 'react';
import { Route } from 'react-router-dom';

import Dashboard from  './components/dashboard.js';
import AddStudent from './components/addstudent.js';
 import DetailModal from './components/modal.js'
import UpdateStudent from './components/updatestudent';
import UpdateComponent from './components/updatecomponent.js';
import Hi from './components/hi';
const BaseRouter = () => (
    <div>
        <switch>
            <Route strict exact path='/' component={Hi}/>
            <Route strict exact path='/dashboard' component={Dashboard}/> 
            <Route strict exact path='/student/:articleID' component={DetailModal}/>  
            <Route strict exact path='/addstudent' component={AddStudent}/>
            <Route strict exact path='/updatestudent/:id' component={UpdateStudent}/>
            <Route strict exact path='/updatestudent' component={UpdateComponent}/>
            
    </switch>
    </div>

)

export default BaseRouter;