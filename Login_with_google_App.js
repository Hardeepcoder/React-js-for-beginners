import './App.css';
import GoogleLogin from 'react-google-login';
import { useEffect, useState } from 'react';
function App() {

  const [username, setusername] = useState();
  const [useremail, setuseremail] = useState();
  const [photo, setphoto] = useState();

  const pass  = (googleData) =>{
    console.log(googleData);

    setusername(googleData.profileObj.name);
    setuseremail(googleData.profileObj.email);
    setphoto(googleData.profileObj.imageUrl);
  }

  const fail = (result) =>{
    console.log(result.error);
  }
  return (
    <div className="App mt-5">
      <h2 className="display-5">ReactJs - Google Login </h2>

    <div className="card col-md-3 m-auto border-0">
      <div className="card-body">
        <img src={photo} />
      <p>{username}</p>
      <p>{useremail}</p>
      </div>
      </div>


    <GoogleLogin
    clientId="864404925085-bs55tg6l4mkqovolciognnb79iq6c9t3.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={pass}
    onFailure={fail}
    cookiePolicy={'single_host_origin'}
    />
    </div>
    
  );
}

export default App;
