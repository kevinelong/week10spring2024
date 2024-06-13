document.addEventListener("DOMContentLoaded", () => {
    const app = new Controller({
        "/": new UserView() //home page
    });

    document.body.innerHTML = app.route("/", new UserModel(123, "Kevin", "Long"));

});//end loaded