# Portfolio / Blog Application

## Goals

Develop a fully functional Portfolio | Blog app, using Node, Express and PostgreSQL, that has the ability to store and retrieve blog posts
from a postgres database.

## Data Models

| Column    | Type                 |
|-----------|----------------------|
|`id`       | SERIAL (PRIMARY KEY) |
|`title`    | VARCHAR (NOT NULL)   |
|`body`     | VARCHAR              |
|`timestamp | TIMESTAMP DEFAULT    |

```json
{
"id": number of entries posted (this will probably get hidden)
"title": the subject of the blog posts
"body": descriptive rants about posts
"timestamp": shows the time and date of blog post
}
```
## Routes
### GET `/`

* The main page of my portfolio
* Display bio and blog
* Will link blog on the main page

### GET `/form`

No arguments

* Displays a form for creating a post about food, includes subject and body
* Upon submitting, Posts to /blog with data from the form


### POST `/blog`

| Argument    | Description                          |
|-------------|--------------------------------------|
| `title`     | subject of the post |
| `body`      | can emphasis on description of subject|
| `timestamp` | timestamp posted to show when entry was created |

### GET `/blog`

| Argument    | Description    |
|-------------|----------------|
| No Arguments| No Arguments

## Inspiration

Food Blog

The following food blogs is what I like in terms of content and aestetic:
* [Sally's Baking Addition] (http://sallysbakingaddiction.com/)
* [Smitten Kitchen] (http://www.smittenkitchen.com) - one of my favorite blogs
* [Kitchy Kitchen] (http://www.thekitchykitchen.com/) - really clean layout

Portfolio Layout

* [Catherine Meyer] (http://www.catherinecodes.com) - my friend's website. i would like to model my porfolio after her website
* [Randle Browning] (https://www.randlebrowning.com/) - i find this layout interesting, reminds me of one of the layouts from tumblr.

Heroku link: https://port-blog.herokuapp.com/
