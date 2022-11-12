import axios from "axios";
import { useState } from "react";

type GITHUBResponse = {
  name: string;
  id: any;
  bio: string;
  public_repos: any;
  location: string;
  avatar_url: any;
};

import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("waiting ...");
  const [id, setId] = useState("waiting ...");
  const [bio, setBio] = useState("waiting ...");
  const [public_repos, setPublic_repos] = useState("waiting ...");
  const [location, setLocation] = useState("waiting ...");
  const [avatarURL, setAvatarURL] = useState("waiting ...");

  const handleShearch = () => {
    axios
      .get<GITHUBResponse>(`https://api.github.com/users/${search}`)
      .then((res) => {
        setAvatarURL(res.data.avatar_url);
        setName(res.data.name);
        setId(res.data.id);
        setBio(res.data.bio);
        setPublic_repos(res.data.public_repos);
        setLocation(res.data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-app">
      <div className="container">
        <main>
          <div className="form">
            <h1>Search profile GitHub...</h1>
            <input
              type="text"
              placeholder=" Username..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleShearch}> Search </button>
          </div>
          <div className="content">
            <div>
              <img src={avatarURL} />
              <h1>Name <br />{name}</h1>
              <p>Id <br />{id}</p>
              <p>Bio <br />{bio}</p>
              <p>Repositories <br /> {public_repos}</p>
              <p>Localization <br /> {location}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
