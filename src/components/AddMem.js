import { useState } from "react";

const AddMem = (props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleOnChangeinTitle = (e) => setTitle(e.target.value);
  const handleOnChangeLink = (e) => setLink(e.target.value);
  
  const newObject = {
    id: props.memsLenght,
    title: { title },
    upwotes: 0,
    downvotes: 0,
    img: { link },
    goldStar: false,
  };

  return (
    <div className="crateCurrentMem">
      <h1>Dodaj mem</h1>
      <label>
        Tytuł
        <input value={title} onChange={handleOnChangeinTitle} type="text" />
      </label>
      <label>
        Link do mema
        <input type="text" value={link} onChange={handleOnChangeLink} />
      </label>
      <p>{title}</p>
      <p>{link}</p>

      <button onClick={console.log(newObject)}>Dodaj</button>
    </div>
  );
};

export default AddMem;

