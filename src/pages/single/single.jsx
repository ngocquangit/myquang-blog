import React  from 'react';
import './single.css';
import Slidebar from '../../components/slidebar/Slidebar';
import SinglePost from '../../components/singlePost/singlePost';
const Single = () => {
    return (
        <div className="Single">
            <SinglePost/>
            <Slidebar/>
        </div>
    );
}

export default Single;
