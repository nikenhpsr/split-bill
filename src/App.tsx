import { useState } from "react";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList, { initialFriends } from "./components/FriendList";
import Button from "./components/Button";

export type InitialProps = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  const handleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  function handleAddFriend(friend: InitialProps) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

export default App;
