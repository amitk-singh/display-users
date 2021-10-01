import '../App.css';

const Users = (props) => {

    const users = props.users;

    return (
        <div className="user">
        {
         
          users.length &&  users.map((user)=>{
              return(
                <div key = {user.id}>
                   <img src={user.avatar} alt="img" />
                   <p>{user.first_name +" "+ user.last_name}</p>
                   <p>{user.email}</p>
                </div>
              )
            })
          }
          </div>
    )
}

export default Users;