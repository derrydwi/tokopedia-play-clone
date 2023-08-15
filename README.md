# tokopedia-play-clone

## Backend

## Database Collection

### video

```
{
  _id: ObjectId
  title: string
  image: string
  link: string
  viewsCount: number
  createdAt: datetime
  updatedAt: datetime
}
```

### product

```
{
  _id: ObjectId
  title: string
  image: string
  link: string
  price: number
  videoId: ObjectId
  createdAt: datetime
  updatedAt: datetime
}
```

### comments

```
{
  _id: ObjectId
  username: string
  content: string
  videoId: string
  createdAt: datetime
  updatedAt: datetime
}
```

## API Structures

| Methods | Command            | Description                                         |
| ------- | ------------------ | --------------------------------------------------- |
| GET     | /                  | Show general information                            |
| GET     | /videos            | Show all videos in the database                     |
| GET     | /products          | Show all products in the database                   |
| GET     | /products/:videoId | Show all products based on videoId                  |
| GET     | /comments/:videoId | Show all comments based on videoId                  |
| POST    | /comments          | Insert a comment to a video based on videoId        |
| POST    | /videos            | Insert a video to the database (admin)              |
| POST    | /products          | Insert a product to the database of videoId (admin) |
| DELETE  | /videos/:id        | Remove a comment by its ID                          |
| DELETE  | /products/:id      | Remove a comment by its ID                          |
| DELETE  | /comments/:id      | Remove a comment by its ID                          |
