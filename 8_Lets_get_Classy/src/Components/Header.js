import { Link } from "react-router-dom";

export const Title = () => {
  return (
    <a href="/">
      <img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"></img>
    </a>
  );
};

export const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
