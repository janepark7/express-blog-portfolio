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
"id": label posts
"title": the subject of the blog posts
"body": descriptive rants about posts
"timestamp": shows the time and date of blog post
}
```
## Routes
### GET `/`

| Argument   | Description                        |
|------------|------------------------------------|
|'portfolio' | main page displaying bio, projects |

* The main page of my portfolio
* Display bio and projects
* Projects will be presented in thumbnail images and be linked

### GET `/foodblog`

| Argument   | Description                          |
|------------|--------------------------------------|
| 'foodblog' | blog displays anything food related  |

### POST '/foodblog'

| Argument    | Description                          |
|-------------|--------------------------------------|
| `title`     | subject of the post |
| `body`      | emphasis on posts inserting texts, links, or images|

## Inspiration

Food Blog

The following food blogs is what I like in terms of content and aestetic:
* [Sally's Baking Addition] (http://sallysbakingaddiction.com/)
* [Smitten Kitchen] (http://www.smittenkitchen.com) - one of my favorite blogs
* [Kitchy Kitchen] (http://www.thekitchykitchen.com/) - really clean layout

Portfolio Layout

*[Catherine Meyer] (http://www.catherinecodes.com) - my friend's website. i would like to model my porfolio after her website
*[Randle Browning] (https://www.randlebrowning.com/) - i find this layout interesting, reminds me of one of the layouts from tumblr.
