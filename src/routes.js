import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Layout from './hoc/layout/layout';
import NewsArticles from './components/Articles/News/Posts';
import VideosArticles from './components/Articles/Videos/Video';
import NewsMain from './components/Articles/News/Main';
import VideosMain from './components/Articles/Videos/Main';



class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/news/" exact component={NewsMain} />
                    <Route path="/videos/" exact component={VideosMain} />
                    <Route path="/articles/:id" exact component={NewsArticles} />
                    <Route path="/videos/:id" exact component={VideosArticles} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;