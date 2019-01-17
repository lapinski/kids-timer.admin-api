# Kids Timer - Admin API
A rust api to handle requests for time, and record time spent.

## Getting Started
1. Clone this Repo
    ```sh
    git clone git@github.com:lapinski/kids-timer.admin-api.git
    ```
2. Copy ```.env.sample``` to ```.env``` and update values
3. Install Dependencies
    ```sh
    yarn install
    ```
4. Start Database (see below for details)
    ```sh
    docker stack deploy -c docker-compose.yml kids-timer-admin-api
    ```
5. Run Start Task
    ```sh
    yarn start
    ```

## Running Locally

### Start Database
```$bash
docker stack deploy -c docker-compose.yml kids-timer-admin-api

```
