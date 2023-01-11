import React from "react";
import Logo from "../assets/logowithphrase.png";
import '../styles/style.css'
export default function Home() {
  return (
    <div className="homeStyle">
    <img
          src={Logo}
          alt="A dog and a cat in a circle"
          style={{ maxWidth: "100vw", margin: "0 auto" }}
        />
      <div style={{ margin: "0 auto", witdth: "100vw"}}>
        <div style={{ textAlign: "center", width: "60%", margin: "10px auto" }}>
          <p style={{ lineHeight: "1.5" }}>
            FTCHr allows pet owners to meet up with others near them to set up
            play dates for their pets. Users are able to create an account and
            log into the application. Upon login, users are greeted with an
            interactive map of post locations in their area. These post
            locations are created by users who are looking to find other people
            and pets to meet. The logged in user can create their own posts and
            their current estimated location will render on the map if location
            permission is granted. Users are also able to select any of the
            users in the application and create a live conversation with the
            direct messaging feature as well.
          </p>
          <p style={{margin: "20px 0", fontSize: "20px"}}>
            <a href="/signup">Sign up</a>
            <span> or </span>
            <a href="/login">Login </a>
            to join the fun!
          </p>
        </div>
      </div>
    </div>
  );
}
