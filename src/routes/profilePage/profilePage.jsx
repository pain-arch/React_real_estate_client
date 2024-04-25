import Chat from "../../components/chat/chat";
import List from "../../components/list/list";
import "./profilePage.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">

          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src="https://avatars.githubusercontent.com/u/61962850?s=400&u=5e8ba51a235a1cfc92ea021106dd78894de317eb&v=4" alt=""/></span>
            <span>Username: <b>Jhon Doe</b></span>
            <span>Email: <b>jhondow123@gmail.com</b></span>
          </div>


          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />

          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />

        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
