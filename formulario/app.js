const d = document,
  $main = d.querySelector("main");

d.addEventListener("submit", (e) => {
  const { target } = e;
  console.log(target);
  if (target.matches("#login-form")) {
    e.preventDefault();

    const $form = d.getElementById("login-form");
    //console.log($form);
    if (!($form.user.value === "admin" && $form.password.value === "admin")) {
      alert("Username or password are invalid");
    } else {
      $main.innerHTML = `
      <h1>Home Page</h1>
      <p>Welcome Admin!</p>
      `;
    }
  }
});
