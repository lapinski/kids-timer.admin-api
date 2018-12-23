#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/user")]
fn get_users() -> &'static str {
    "Here are all of the users...."
}

#[post("/user")]
fn add_user() -> &'static str {
    "Trust me, i created a user"
}

fn main() {
    const baseUrl: &str = "/api/v1";
    rocket::ignite()
        .mount(baseUrl, routes![get_users])
        .mount(baseUrl, routes![add_user])
        .mount(baseUrl, routes![index])
        .launch();
}