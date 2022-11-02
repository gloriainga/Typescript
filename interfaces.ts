interface User {
  id: number;
  username: string;
  fullName: string;
  active?: boolean;
  callback?: () => {};
}

const currentUser: User = {
  id: 27,
  fullName: "Pedro Marmol",
  username: "pmarmol@gmail.com",
};

type user = User | undefined;

let currentUser2: user;
