import React, { usealbums, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [albums, setAlbums] = usealbums([]);

  const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'

  });

  const getData = () => {
    const data = instance.get("/albums")
      .then((resp) => setAlbums(resp))
    return data;
  }
  console.log("got it",{albums});

  const postData = () => {
    const data = instance.post("/albums", {
      method: "POST",
      body: {
        title: "hello boys",
        userId: 1
      },
      headers: {
        'Content-Type': 'application/json'
      },
    }).then((resp) => setAlbums(resp.data))
    return data;
  };
  console.log("posted",{albums});

  const removeData = () => {
    const data = instance.delete("/albums/1")
      .then((resp) => setAlbums(resp))
    return data;
  }
  console.log("removed",{albums});

  const updateData = () => {
    const data = instance.put("/albums/1", {
      userId: '1',
      body: 'Albums'
    })
      .then((resp) => setAlbums(resp))
    return data;
  }
  console.log("updated",{albums});


  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
      <button onClick={postData}>Post Data</button>
      <button onClick={removeData}>Delete Data</button>
      <button onClick={updateData}>Update Data</button>
      {albums.map(photo => {
        return (
          <div>
            <h3>{photo.userId}</h3>
            <h4>{photo.title}</h4>
          </div>
        )
      })
      }

    </div>
  );
}

export default App;
