import React, { useState } from 'react';
import Search from './cloneMain/Search';
import URL from './cloneMain/api/URL';
import './Design.css';
import Video from './cloneMain/Video';
import ListVideos from './cloneMain/ListVideos';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });

  async function videoSubmit(searchTerm) {
    const {data: { items: videos } } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 100,
        key: "AIzaSyC4HtSwSzpwlqoHnERzQLnCX5oRrljl1Uk",
        q: searchTerm
      }
    });

    console.log(Doniyor);
    setVideos(Doniyor);
    setSelectedVideos(Doniyor[0]);
  }

  return (
    <>
      <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectedVideos} />
        </div>
        <div className="videoLists">
          <ListVideos Doniyor={Doniyor} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
    </>
  );
};

export default App;