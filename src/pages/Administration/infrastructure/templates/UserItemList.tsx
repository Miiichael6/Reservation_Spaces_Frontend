import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const UserItemList = ({ user }: { user: any }) => {
  return (
    <ListItem key={user.id}>
      <ListItemAvatar>
        <Avatar>{user.name[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={user.email} />
    </ListItem>
  );
};

export default UserItemList;
