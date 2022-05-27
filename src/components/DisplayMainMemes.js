import logo from "../otherPictures/logo.jpg";

const DisplayMainMemes=(props)=>(
    <>
    <main className="placeforMem">
      <div className="specyficMem">
        <h1>
          {props.title}
          <img
            className="goldStar"
            src={"./images/button/goldStar.png"}
            onClick={() => props.goldStarFunction(props.id)}
            style={
              props.goldStar ? { background: "gold" } : { background: "grey" }
            }
          />
        </h1>

        <img className="sizeMem" src={props.img} />
        <div className="buttonForSpecyficMem">
          <button className="like" onClick={() => props.likeIt(props.id)}>
            <img src="./images/button/like.png" />
          </button>
          <p>{props.upvotes}</p>
          <button className="dislike" onClick={() => props.noLikeIt(props.id)}>
            <img src="./images/button/dislike.png" />
          </button>
          <p>{props.downvotes}</p>
        </div>
      </div>
    </main>
  </>
  )
  export default DisplayMainMemes
