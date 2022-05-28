import React from "react";
import "./App.css";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";
import MainMemes from "./MainMemes";
import WaitingMemes from "./WaitingMemes";
import AddMem from "./AddMem";
import logo from "../otherPictures/logo.jpg";

class App extends React.Component {
  state = {
    memes: [
      {
        id: 1,
        title: "Backup",
        upvotes: 11,
        downvotes: 1,
        img: "./images/backup.jpg",
        goldStar: false,
      },
      {
        id: 2,
        title: "Udwiodła",
        upvotes: 1,
        downvotes: 1,
        img: "./images/uwiodla.jpg",
        goldStar: false,
      },
      {
        id: 3,
        title: "Alert RCB",
        upvotes: 1,
        downvotes: 2,
        img: "./images/AlertRcb.jpg",
        goldStar: false,
      },
      {
        id: 4,
        title: "Ekspert",
        upvotes: 9,
        downvotes: 3,
        img: "./images/ekspertu.jpg",
        goldStar: false,
      },
      {
        id: 5,
        title: "Imperium",
        upvotes: 1,
        downvotes: 3,
        img: "./images/Imperium.png",
        goldStar: false,
      },
      {
        id: 6,
        title: "Ignoruj możliwości",
        upvotes: 20,
        downvotes: 4,
        img: "./images/InorujSwojeMozliwosci.jpg",
        goldStar: false,
      },
      {
        id: 7,
        title: "Jajko koń",
        upvotes: 22,
        downvotes: 30,
        img: "./images/jajoKon.jpg",
        goldStar: false,
      },
      {
        id: 8,
        title: "Krok",
        upvotes: 5,
        downvotes: 5,
        img: "./images/krokDoTylu.png",
        goldStar: false,
      },
      {
        id: 9,
        title: "Poddać się",
        upvotes: 6,
        downvotes: 1,
        img: "./images/poddacSie.png",
        goldStar: false,
      },
      {
        id: 10,
        title: "Pod wozem",
        upvotes: 1,
        downvotes: 5,
        img: "./images/podWozem.jpg",
        goldStar: false,
      },
      {
        id: 7,
        title: "Praca",
        upvotes: 1,
        downvotes: 0,
        img: "./images/praca.jpg",
        goldStar: false,
      },
    ],
  };

  handleChangeUpvotes = (id) => {
    const memes = this.state.memes.map((mem) => {
      if (id === mem.id) {
        mem.upvotes = mem.upvotes + 1;
      }
      return mem;
    });
    this.setState({
      memes,
    });
  };
  handleChangeDownvotes = (id) => {
    const memes = this.state.memes.map((mem) => {
      if (id === mem.id) {
        mem.downvotes = mem.downvotes + 1;
      }
      return mem;
    });
    this.setState({
      memes,
    });
  };

  handleGoldStar = (id) => {
    const memesz = this.state.memes.map((mem) =>
      console.log(`ID:${mem.id} title:${mem.title} img:${mem.img} `)
    );

    const memes = this.state.memes.map((mem) => {
      if (id === mem.id) {
        mem.goldStar = !mem.goldStar;
      }
      return mem;
    });
    this.setState({
      memes,
    });
  };

  pushIntoArrayMemes = (title, img) => {
    const memesLenght = this.state.memes.length;
    this.setState({
      memes: [
        ...this.state.memes,
        {
          id: memesLenght,
          upvotes: 0,
          downvotes: 0,
          goldStar: 0,
          title: title,
          img: img,
        },
      ],
    });
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <nav>
            <img src={logo} alt="logo" className="fatBoyLogo" />
            <div className="logoTitle">Moje Memy</div>
            <p className="linktToMemes firstLinkToMemes">
              <NavLink
                style={{ textDecoration: "none", color: "#2196F3" }}
                to="/"
              >
                Główna
              </NavLink>
            </p>
            <p className="linktToMemes secondLinkToMemes ">
              <NavLink
                style={{ textDecoration: "none", color: "#2196F3" }}
                to="/poczekalnia"
              >
                poczekalnia
              </NavLink>
            </p>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <MainMemes
                  memes={this.state.memes}
                  likeIt={this.handleChangeUpvotes}
                  noLikeIt={this.handleChangeDownvotes}
                  chocieInListItems={this.chocie}
                  goldStarFunction={this.handleGoldStar}
                />
              }
            />

            <Route
              path="/poczekalnia"
              element={
                <WaitingMemes
                  memes={this.state.memes}
                  likeIt={this.handleChangeUpvotes}
                  noLikeIt={this.handleChangeDownvotes}
                  chocieInListItems={this.chocie}
                  goldStarFunction={this.handleGoldStar}
                />
              }
            />
            <Route
              path="/dodaj"
              element={<AddMem pushIntoArrayMemes={this.pushIntoArrayMemes} />}
            />
          </Routes>

          <footer>
            <div className="bottom">
              <p className="paragraphBottom">
                <NavLink
                  style={{ textDecoration: "none", color: "#2196F3" }}
                  to="/dodaj"
                >
                  Dodaj mem
                </NavLink>
              </p>
            </div>
          </footer>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
