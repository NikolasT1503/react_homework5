import React from "react";
import axios from "axios";

class Users extends React.Component {
  usersTemp = [
    {
      id: "",
      name: "",
      userName: "",
      email: "",
      photo: "",
      follow: false,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: "",
          name: "",
          userName: "",
          email: "",
          photo: "",
          follow: false,
        },
      ],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("response", response.data);
      this.setUsers(response.data);
    });
  }

  setUsers(inputUsers) {
    console.log(inputUsers);
    inputUsers.map((item) => {
        this.usersTemp.push({
            id: item.id,
            name: item.name,
            userName: item.userName,
            email: item.email,
            photo:
              "https://ps.w.org/cbxuseronline/assets/icon-128x128.png?rev=2284897",
            followed: false,            
        })
        return true
    })

    console.log('setUsers', this.usersTemp);
    this.setState({
      users: this.usersTemp,
    });
  }

  unfollow(id) {
    const tempUsers = this.state.users;
    tempUsers.map((user) => {
      if (user.id === id) {
        user.followed = false;
      }
      return true;
    });
    this.setState({users: tempUsers});
  }

  follow(id) {
    const tempUsers = this.state.users;
    tempUsers.map((user) => {
      if (user.id === id) {
        user.followed = true;
      }
      return true;
    });
    this.setState({users: tempUsers});
  }


  render() {
    return (
      <div>
        {this.state.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.photo != null ? u.photo : null} alt="foto" />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
