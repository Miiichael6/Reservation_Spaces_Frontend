import { useAppDispatch, useAppSelector } from "@/hooks/redux-toolkit"
import { userRepository } from "@/shared/repository";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from "@mui/material"
import { useEffect } from "react";
import { AdministrationActions } from "@/store/slices/Administration";

const UserList = () => {
    const { users } = useAppSelector(state => state.Administration);
    const dispatch = useAppDispatch();
    useEffect(() => {
      const getUsers = async () => {
        const users = await userRepository.getAll()
        dispatch(AdministrationActions.setState({ users: users }))
      }
      getUsers()
    }, [dispatch])

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: "auto", padding: 2 }}>
      <Typography variant="h6" sx={{ textAlign: "center", marginBottom: 2 }}>
        Lista de Usuarios
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar>{user.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default UserList;