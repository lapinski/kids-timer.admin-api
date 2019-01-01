#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate serde_derive;

use rocket_contrib::json::Json;

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[derive(Serialize, Deserialize)]
struct User {
    first_name: String,
    last_name: String,
}

#[get("/user/<id>", format = "json")]
fn get_user(id: usize) -> Json<User> {
    Json(User {
        first_name: "Something".to_string(),
        last_name: "XYZ".to_string()
    })
}

#[get("/user")]
fn get_users() -> Json<[User; 1]> {
    let users: [User; 1] = [
        User {
            first_name: "aFirstName".to_string(),
            last_name: "aLastName".to_string()
        }
    ];

    /* TODO: Implement this */

    return Json(users);
}

#[post("/user", data="<user>")]
fn add_user(user: Json<User>) {
    /* TODO: Implement this */
}

fn main() {
    const BASE_URL: &str = "/api/v1";
    rocket::ignite()
        .mount(BASE_URL, routes![get_users])
        .mount(BASE_URL, routes![add_user])
        .mount(BASE_URL, routes![index])
        .launch();
}