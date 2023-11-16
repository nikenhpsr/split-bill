import { InitialProps } from "../App";

type FriendProps = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

type FriendComponentProps = {
  friend: FriendProps;
  onSelection: (friend: FriendProps) => void;
  selectedFriend: InitialProps;
};

export default function Friend({
  friend,
  onSelection,
  selectedFriend,
}: FriendComponentProps) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} €{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you €{Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <button className="button" onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </button>
      </li>
    </>
  );
}
