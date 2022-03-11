# Project Overview

## Project Links

- [Project Repo](https://github.com/daffodil-dragons/Project-03-API)
- [Deployment Link]()

## Project Description

This app will serve as a character sheet creator for a Dungeons & Dragons 5E player. They will be able to also update their character sheet as they play and level up. The backend will manage the CRUD operations and database for the frontend.

## User Stories

As a user I want to use an app to create a D&D character sheet, so that I can easily have access to updating and managing multiple character sheets at once.

## Schemas/Models

- [All Schemas](https://drive.google.com/file/d/1BUWXXWHtOAMqUNXJpagbGh83Citfd-ex/view?usp=sharing)

### MVP/PostMVP - 5min

#### MVP

- Server
- Database
- Schemas/Models
- Controllers
- Deployment

#### PostMVP

- Equipment model
- Items model
- Controllers

##### MVP Time Frame

| Component               | Priority | Estimated Time | Actual Time |
| ----------------------- | :------: | :------------: | :---------: |
| Server connection       |    H     |     0.5hrs     |  <0.5 hrs   |
| Database connection     |    H     |     0.5hrs     |  <0.5 hrs   |
| Schemas/Models creation |    H     |      1hrs      |    2 hrs    |
| Controllers             |    H     |      2hrs      |    2 hrs    |
| Deployment              |    H     |      2hrs      |   .5 hrs    |
| Total                   |          |      6hrs      |   5.5 hrs   |

##### PostMVP Time Frame

| Component       | Priority | Estimated Time | Actual Time |
| --------------- | :------: | :------------: | :---------: |
| Equipment Model |    M     |      1hr      |             |
| Spell Model & controllers   |    M     |      1hr      |     1 hr        |
| Items Model     |    M     |      1hrs      |             |
| Controllers     |    M     |      2hrs      |             |
| Total           |          |      4hrs      |             |

## Additional Libraries

N/A

## Sources

N/A

## Code Snippet

Code snippet will go here

```js

const mongoose = require("../connection");
const statSchema = require("./Stat");

const characterSchema = new mongoose.Schema({
  name: String,
  demographic: String,
  class: String,
  level: Number,
  stats: statSchema,
  spells: [
    {
      ref: "Spell",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Character", characterSchema);

```
The above code was interesting to figure out since we ended up having to create a model that uses a schema as a schema and a schema as a model for reference. We had to create the stats at the same time as the character and it was giving us problems if we tried to reference the model instead.
