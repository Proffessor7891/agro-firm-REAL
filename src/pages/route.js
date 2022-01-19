import React, { useState } from 'react';
import s from './style.module.scss';

import Index from './Index';
import About from './About';
import Mycorrhiza from './Mycorrhiza';
import Gallery_page from './Gallery';
import Blog from './Blog';
import Post from './Post';
import { Corn, Crops, Vegetables, Beans, Garden, No_till, Agriculture } from './Categories/index';


import { Header, Footer } from './../component/index';
import { Switch, Route } from 'react-router-dom';
import { publicRoutes } from '../constans/routes';

export const Router = React.memo(function Router(props) {
    document.body.contentEditable = false;

    return (
        <div className={s.main_container}>
            <Header />
            <Switch>
                <Route
                    path={publicRoutes.INDEX}
                    component={Index}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.ABOUT}
                    component={About}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.MYCORRHIZA}
                    component={Mycorrhiza}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.GALLERY}
                    component={Gallery_page}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.BLOG}
                    component={Blog}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.POST}
                    component={Post}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.CORN}
                    component={Corn}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.CROPS}
                    component={Crops}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.VEGETABLES}
                    component={Vegetables}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.BEANS}
                    component={Beans}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.GARDEN}
                    component={Garden}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.NOTILL}
                    component={No_till}
                    exact
                ></Route>
                <Route
                    path={publicRoutes.AGRICULTURE}
                    component={Agriculture}
                    exact
                ></Route>
            </Switch>
            <Footer />
        </div>
    );
});
