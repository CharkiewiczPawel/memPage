
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








//   // if (props.filterMem === true&&props.dispalyMem===true) {
//   //   let chocie = props.memes.filter((mem) => mem.upvotes >= 10);
//   //   const mem = chocie.map((mem) => (
//   //     <Mem
//   //       key={mem.id}
//   //       id={mem.id}
//   //       title={mem.title}
//   //       upvotes={mem.upvotes}
//   //       downvotes={mem.downvotes}
//   //       img={mem.img}
//   //       likeIt={props.likeIt}
//   //       noLikeIt={props.noLikeIt}
//   //       goldStarFunction={props.goldStarFunction}
//   //       goldStar={mem.goldStar}
//   //     />
//   //   ));
//   //   return mem;
//   // }
//   // if (props.filterMem === false&&props.dispalyMem===true) {
//   //   let chocie = props.memes.filter((mem) => mem.upvotes < 10);
//   //   const mem = chocie.map((mem) => (
//   //     <Mem
//   //       key={mem.id}
//   //       id={mem.id}
//   //       title={mem.title}
//   //       upvotes={mem.upvotes}
//   //       downvotes={mem.downvotes}
//   //       img={mem.img}
//   //       goldStar={mem.goldStar}
//   //       likeIt={props.likeIt}
//   //       noLikeIt={props.noLikeIt}
//   //       goldStarFunction={props.goldStarFunction}

//   //     />
//   //   ));
//   //   return mem;

// export default ListItems;