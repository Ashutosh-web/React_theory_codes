import { useEffect , useState } from "react";
import ProfileClass from "./ProfileClass";

const AboutUs = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetchUserDate();
  }, []);

  async function fetchUserDate() {
    const data = await fetch("https://api.github.com/users/anoyash");
    const objData = await data.json();
    setUserData(objData);

    return () =>{
      console.log("unmounting AboutUs...");
    }
  }

  return (
    <div>
      <h1>AboutUs</h1>
      <ProfileClass 
      name={userData?.name} 
      location={userData?.location} 
      avatar_url = {userData?.avatar_url}
      />
    </div>
  );
};

export default AboutUs;
