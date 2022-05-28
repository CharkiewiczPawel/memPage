
import DisplayMainMemes from "./DisplayMainMemes";

const MainMemes = (props) => {
  let chocie = props.memes.filter((mem) => mem.upvotes >= 10);
  const mem = chocie.map((mem)=>(
           <DisplayMainMemes
        key={mem.id}
        id={mem.id}
        title={mem.title}
        upvotes={mem.upvotes}
        downvotes={mem.downvotes}
        img={mem.img}
        likeIt={props.likeIt}
        noLikeIt={props.noLikeIt}
        goldStarFunction={props.goldStarFunction}
        goldStar={mem.goldStar}
      />   
  ));
  return mem;
};

export default MainMemes;
