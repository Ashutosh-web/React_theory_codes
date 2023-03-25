export const Title = () =>{
    return (
        <a href="/">
                <img src = "https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"></img>
        </a>
    )
};

export const Header = () =>{
    return (
        <div className="header">
            <Title/>
            <ul className="nav-items">
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
        </div>
    )
};
