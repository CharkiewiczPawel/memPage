import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import ListItems from "./ListItems";
import Footer from "./Footer";

class App extends React.Component {
  state = {
    filterMem: true,
    dispalyMem:true,

    mems: [
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
    const mems = this.state.mems.map((mem) => {
      if (id === mem.id) {
        mem.upvotes = mem.upvotes + 1;
      }
      return mem;
    });
    this.setState({
      mems,
    });
  };
  handleChangeDownvotes = (id) => {
    const mems = this.state.mems.map((mem) => {
      if (id === mem.id) {
        mem.downvotes = mem.downvotes + 1;
      }
      return mem;
    });
    this.setState({
      mems,
    });
  };

  handleFilterMemReturnFalse = () => {
    this.setState({ filterMem: false,
      dispalyMem:true
    });
  };
  handleFilterMemReturnTrue = () => {
    this.setState({ filterMem: true,
    dispalyMem:true
    });
    
  };

  handleGoldStar = (id) => {
    console.log(`Handle Gold Star działa ${this.state.mems}`);
    const mems = this.state.mems.map((mem) => {
      if (id === mem.id) {
        mem.goldStar = !mem.goldStar;
      }
      return mem;
    });
    this.setState({
      mems,
    });
  };
  handleDisplayMemReturnFalse=(dispalyMem)=>{
     let reverse=!dispalyMem
    this.setState({
      dispalyMem:reverse
    })
  }
pushIntoArrayMems=(mems,newPicture)=>{
  this.setState({mems:[...this.state.mems,newPicture]})
}

  render() {
    return (
      <>
        <Navbar
          filterMemReturnTrue={this.handleFilterMemReturnTrue}
          filterMemReturnFalse={this.handleFilterMemReturnFalse}

        />

        <ListItems
          mems={this.state.mems}
          filterMem={this.state.filterMem}
          dispalyMem={this.state.dispalyMem}
          likeIt={this.handleChangeUpvotes}
          noLikeIt={this.handleChangeDownvotes}
          chocieInListItems={this.chocie}
          goldStarFunction={this.handleGoldStar}
        />
        <Footer
         dispalyMem={this.state.dispalyMem}
         dispalyMemReturnFalse={this.handleDisplayMemReturnFalse}
         mems={this.state.mems}
         memsLenght={this.state.mems.length}
         pushIntoArrayMems={this.pushIntoArrayMems}
         
        />
      </>
    );
  }
}

export default App;
