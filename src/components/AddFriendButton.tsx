type AddFriendButtonProps = {
  children: React.ReactNode;
};

export default function AddFriendButton({ children }: AddFriendButtonProps) {
  return <button className="button">{children}</button>;
}
