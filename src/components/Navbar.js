import logo from "../otherPictures/logo.jpg";


const Navbar=(props)=>(
  <nav>
    <img src={logo} alt="logo" className="fatBoyLogo" />
    <div className="logoTitle">Moje Memy</div>
    <button
      className="selectFirst select"
       onClick={props.filterMemReturnFalse}
    >
      Poczekalnia
    </button>
    <button className="select" 
     onClick={props.filterMemReturnTrue}
    >
      Główna
    </button>
  </nav>
)

export default Navbar;

