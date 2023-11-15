import { useState } from "react";
import Button from "./Button";
import { InitialProps } from "../App";

type FormAddFriendProps = {
  onAddFriend: (friend: InitialProps) => void;
};

export default function FormAddFriend({ onAddFriend }: FormAddFriendProps) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !image) return;

    const id = Date.now();
    const newFriend: InitialProps = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📸Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add friend</Button>
    </form>
  );
}
