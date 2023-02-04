export function accessUser(user, password) {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((tok) => {
        resolve(tok.token);
      })
      .catch((err) => {
        reject("Fetch Error!!!", err);
      });
  });
}
export function registerUser(name, last, mail, pass) {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/users", {
      method: "POST",
      body: JSON.stringify({
        email: mail,
        password: pass,
        name: {
          firstname: name,
          lastname: last,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((tok) => {
        resolve(tok.id);
      })
      .catch((err) => {
        reject("Fetch Error!!!", err);
      });
  });
}
