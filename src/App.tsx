import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <button className="button">Add friend</button>
      </div>
    </div>
  );
}

export default App;
