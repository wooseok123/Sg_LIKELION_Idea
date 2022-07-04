const getUserList = async () => {
  const userList = await fetch("https://jsonplaceholder.typicode.com/posts");
  const parsedUser = userList.json();
  console.log(parsedUser);
};

const getName = (user) => {
  return new Promise((res, err) => {
    const result = user.name;
    res(result);
    err("값 없다..");
  });
};

let userProfile = { name: "우서깅 " };

const resultGetName = getName(userProfile)
  .then((getName_res) => {
    console.log(getName_res);
    return getName_res;
  })
  .catch((getName_err) => {
    console.log(getName_err);
  });

getUserList();
