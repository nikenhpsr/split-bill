import AddFriendButton from "./AddFriendButton";

export default function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Name</label>
      <input type="text" />
      <label>📸Image URL</label>
      <input type="text" />
      <AddFriendButton>Add friend</AddFriendButton>
    </form>
  );
}
