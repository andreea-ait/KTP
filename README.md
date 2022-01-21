# Knowledge Technology Practical 
# Expert System

## Documentation:

https://reactjs.org

How to install:

https://reactjs.org/docs/create-a-new-react-app.html

1. Install `Node >= 14.0 npm >= 5.6` from https://nodejs.org/en/
2. To create a project and set up the development environment, run:
  ```console
  npx create-react-app my-app
  cd my-app
  ```
3. To start a project, run:
  ```console
  npm start
  ```
The last command compiles the program, then the expert system can be viewed in the browser on the local host or network shown in the terminal.

## Project structure
This project was created using the command `2` shown above, which just creates a frontend build pipeline. The `src` directory contains the `JavaScript` files we implemented for this project, mainly:

  - all the files under `components`
    
    - `Expert.js`: handles the entire system: questions and answer options, user input, computes the safety level, displays the buttons and the final result
    - `Chaining.js`: adds the facts from the user's answers to the knowledge base and then performs forward chaining; it is called after each question is answered
    - `Questions.js`: list containing all the questions; each question has an id, a fact key and a fact value, requirements (whether the question to be asked or not)
    - `KB.js`: the initial knowledge base; it has two main members: `facts` and `rules`. Before being added new facts, it only holds the inference rules in dictionaries
    - `Outcomes.js`: list of all possible outcomes, each of them containing the title, text and an id; the id is the name of the fact that must be inferred in order to show the corresponding outcome 
    - `Result.js`: used the map the final facts inferred (needed for the result) and finds all the outcomes to be displayed in the results section
    - `FactsButton.js`: handles the Facts Panel; it displays the latest rules (retrieved directly from the answers and inferred from the rules), the current score and how it was calculated
    - `Header.js`: handles the menu bar
    - `info` directory: the files display information about the system, the security domain and developers
  - `App.js`: the home page
  - `index.js`: contains the paths to different pages
  - `index.css`: used for styling
  - the `.mp4` files: used for background
