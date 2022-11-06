import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import List from './pods/posts/List';
import NewPost from './pods/posts/NewPost';
import EditPost from './pods/posts/EditPost';
import NoPage from './pages/NoPage';

import { RouteName } from './enums/Routes';


ReactDOM.render (
    <BrowserRouter>
        <Routes>
            <Route path={RouteName.HOME}
                element={<List/>}/>
            <Route path={RouteName.CREATE_NEW_POST}
                element={<NewPost/>}/>
            <Route path={RouteName.EDIT_POST}
                element={<EditPost/>}/>
            <Route path="*" element={<NoPage />} />

        </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
);
