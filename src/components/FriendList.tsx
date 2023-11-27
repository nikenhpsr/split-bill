import { InitialProps } from "../App";
import Friend from "./Friend";

type FriendProps = {
  id: number;
  name: string;
  image: string;
  balance: number;
};

export type FriendListProps = {
  friends: FriendProps[];
  onSelection: (friend: FriendProps) => void;
  selectedFriend: InitialProps | null;
};

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function FriendList({
  friends,
  onSelection,
  selectedFriend,
}: FriendListProps) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriend={selectedFriend}
          />
        ))}
      </ul>
    </>
  );
}
