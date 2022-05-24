import AddMem from "./AddMem";

const Footer = (props) => {
  if (props.dispalyMem === false) {
    return (

      <AddMem
     mems={props.mems}
     memsLenght={props.memsLenght}
     pushIntoArrayMems={props.pushIntoArrayMems}
     newPicture={props.newPicture}
      />
      
    );
  }
  if (props.dispalyMem === true) {
    return (
      <div className="bottom">
        <button className="crateMem" onClick={props.dispalyMemReturnFalse}>
          Dodaj mema
        </button>
      </div>
    );
  }
};

export default Footer;


