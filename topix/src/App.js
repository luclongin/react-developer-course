import React from 'react';
import logo from './logo.svg';
import { useParams } from "react-router-dom";
import './App.css';
import { Link, Routes, Route, useNavigate} from 'react-router-dom';

const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1>HOMEPAGE PAGE</h1>
      <button onClick={() => navigate('/topics')
      }>Navigate</button>
      <Link to='/topics'>Topics</Link>
    </div>
  );
}

const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
    </div>
  );
}

const TopicDetail = (props) => {
  let params = useParams();
  console.log(params);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/topics' element={<TopicList />} />
        <Route path='/topics/:topicId' element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
