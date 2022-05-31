const users:any[] = [
  {
    name:'admin',
    statusAdmin: true,
  },
];

export function createUser(newUser) {
  users.push(newUser);
};

export function getUsers() {
  return users;
};

export function getUser(id) {
  return users[id];
};

export function changeUser(id:number, userValue) {
  users[id] = {
    ...users[id],
    ...userValue
  };
};

export function deleteUser(id) {
  users.splice(id, 1);
};