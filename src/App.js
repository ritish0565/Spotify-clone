import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {

  //const [setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //BEM convention

  //running the code on a given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {


        dispatch({
          type: "SET_USER",
          user: user
        });
      });


      spotify.getUserPlaylists().then((playlists) => {

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('17ppfDmHCXTuY3KkbYiPge').then(response =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response,
        })
      );

    }


    //console.log('I HAVE A TOKEN >>> ', token);
    //code...
  }, []);


  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
          )
      }

      {/*Spotify Logo*/}
      {/*Login with Spotify Button*/}
      {/* <Login /> */}
    </div>
  );
}

export default App;
