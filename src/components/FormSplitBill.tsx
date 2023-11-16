import { useState } from "react";
import { InitialProps } from "../App";
import Button from "./Button";

type selectedFriendProps = {
  selectedFriend: InitialProps;
  onSplitBill: (value: number) => void;
};

export default function FormSplitBill({
  selectedFriend,
  onSplitBill,
}: selectedFriendProps) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const friendExpense = bill ? Number(bill) - Number(yourExpense) : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!bill || !yourExpense) return;

    onSplitBill(
      whoIsPaying === "user" ? Number(friendExpense) : -Number(yourExpense)
    );
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split Bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <label>🧍Your Expenses</label>
      <input
        type="text"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      />

      <label>🧑‍🤝‍🧑{selectedFriend.name}'s Expense</label>
      <input
        type="text"
        disabled
        value={Number(friendExpense) >= 0 ? friendExpense : "Not valid"}
      />

      <label>Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
