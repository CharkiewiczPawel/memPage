import { useState } from "react";

const AddMem = (props) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleOnChangeinTitle = (e) => setTitle(e.target.value);
  const handleOnChangeLink = (e) => setLink(e.target.value);

  const newObject = {
    title: { title },
    link: { link },
  };

  return (
    <div className="memeBoard">
      <div className="createCurrentMem">
        <h1>Dodaj mem</h1>
        <label className="labelForMeme">
          Tytuł
          <input value={title} onChange={handleOnChangeinTitle} type="text" />
        </label>
        <label className="labelForMeme">
          Link do mema
          <input type="text" value={link} onChange={handleOnChangeLink} />
        </label>
        <p>{title}</p>
        <p>{link}</p>

        <button onClick={() => props.pushIntoArrayMemes(title, link)}>
          Dodaj
        </button>
      </div>
    </div>
  );
};

export default AddMem;
