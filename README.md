## FM

Find musicinas is an app where you can find musicians by location, habilities and taste. Collaborate online and share your tracks with your friends

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As a new user I can sign up in the platform so that I can start looking for musicians around me
-  **Login:** As a user I can login to the platform so that I can see my profile and connections
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Create profile** As a user I can create a public profile that I can share it with the community, two types, musician or Band profile
-  **Edit profile** As a user I can edit my profile, add pictures, description so other users can view
-  **Search users or bands** As a user I can seacrh for users or band to connect
-  **View list of users or bands** As a user I can edit my profile, add pictures, description so other users can view
-  **Add to favorites** As a user I can add a user's profile to my favorites collection
-  **Remove user from favorites** As a user I can add a user's profile to my favorites collection



## Backlog

User profile:
- Messages
- Different types of users like service providers
- Users create Bands and invite other user to share a common group

Geo Location:
- add geolocation to users
- show people near your location

# Client

## Routes
| Router Path          | Component         | Permissions | Behavior                                                     |
| -------------------- | ----------------- | ----------- | ------------------------------------------------------------ |
| `/`                  | HomePageComponent | public      | just promotional copy                                        |
| `/signup`            | Signup            | anon only   | signup form, link to login, navigate to homepage after signup |
| `/login`             | Login             | anon only   | login form, link to signup, navigate to homepage after login |
| `/logout`            | n/a               | anon only   | navigate to homepage after logout, expire session            |
| `/dashboard`         | DashBoard         | auth user   | Display user info, nabber, search bar and results            |
| ` /edit-profile`     | EditProfile       | auth user   | Display form to user edit personal information               |
| ` `/my-profile       | MyProfile         | auth user   | Display public view of my profile                            |
| ` /user-profile/:id` | UserProfile       | auth user   | Display public profile of selected user by it's id           |
| ` /favorites`        | Favorite          | auth user   | Display list of all favorited users                          |





## Components

- LoginView
- Signup
- Navbar
- Dashboard
- EditProfile
- MyProfile
- UserProfile
- Favorites
- AddMedia


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Musician Search
  - users.list()
  - musician.search(terms)
  - musician.detail(id)
  - musician.addFavorite(id)
  - Musician.removeFavorite(id)

# Server

## Models

User model

```js
User {
	username: String // required
	email: String // required & unique
  password: String // required
  description: String
  picture: File
  instruments: String
  genres: String
  favorites: [ userID ]
  media: [ mediaID ]
}
```

Media model

```js
Media {
  type: ENUM ['song', 'video']
  url: String // required
  title: String
  description: String
  year: Number
  month: Number
  userID: userID
}
```

## API

| HTTP method | URL                     | Request body                                    | Success status | error status | Description                               |
| ----------- | ----------------------- | ----------------------------------------------- | -------------- | ------------ | ----------------------------------------- |
| ` GET`      | ` /auth/me`             | Saved session                                   |                |              | if user is logged in                      |
| ` POST`     | `/auth/signup`          | `{name, email, password }`                      | 200            | 400          | create a new user in DB                   |
| ` POST`     | ` /auth/login`          | ` {username, password}`                         | 200            | 400          | checks if user credentials are correct    |
| `POST`      | ` /auth/logout`         |                                                 | 200            | 400          | Logs out the user                         |
| ` GET`      | ` /profile`             |                                                 | 200            | 404          | returns all profiles by ID                |
| ` GET`      | ` /profile/:id`         |                                                 | 200            | 404          | returns a single profile by ID            |
| ` GET`      | ` /my-profile`          |                                                 | 200            | 404          | returns the user ID                       |
| ` PUT`      | ` /edit-profile`        | ` {username, description, instruments, genres}` | 201            | 400          | updates user profile information          |
| ` GET`      | ` /favorites/:userId`   |                                                 | 200            | 404          | returns the list of favorited users by id |
| `POST`      | ` /favorites`           | `{ userId, favoriteId}`                         | 201            | 400          | Adds a userID to favorites property       |
| `DELETE`    | `/favorites/:id`        | `{ userId, favoriteId }`                        | 201            | 400          | Removes a userID from favorites property  |
| ` GET`      | /media                  |                                                 |                |              | returns all media for for user ID         |
| ` POST`     | /media                  | ` {type, url, title, year, month, userId}`      | 201            | 400          | Adds media to a user ID                   |
| ` DELETE`   | /media/:userId/:mediaId |                                                 | 200            | 400          | Deletes                                   |





## Links

### Trello/Kanban

https://trello.com/b/dL4N3MvS/fm-module3-project

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)