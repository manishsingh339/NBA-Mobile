import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import NewsSlider from '../widgets/NewSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideoList/videosList';

const Home = () => {
    return (
        <div>
            <NewsSlider 
                type="featured"
                start={3}
                amount={6}
                settings={{dots: false}}
            />
            <NewsList  
                type="card"
                loadmore={true}
                start={3}
                amount={6}
            />
            <VideosList
                 type="card"
                 title={true}
                 loadmore={true}
                 start={0}
                 amount={3}
            />
        </div>
    )
}

export default Home;