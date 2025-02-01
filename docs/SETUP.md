# Step 1:
## How to connect Gemini LLM

1. Create your own Gemini API Key by following <a href="https://ai.google.dev/">this link</a>
2. Once you get the API
3. Find the `.env` file inside the `backend/resume_analyzer` folder
4. Open the file to reveal a blank field called `GEMINI_API_KEY`
5. Copy and paste your Gemini API Key inside the parenthesis of that file to enable the AI functionality

# Step 2:
## Option 1: How To Run Project using Docker-Recommended
   - Make sure Docker is installed on host system
   - In the `AI-Resume-Analyzer` directory,
   - Run: `docker-compose up --build`
   - To stop docker: `docker-compose down`

## Option 2: Manual Start
### How To Initialize And Run The FastAPI Endpoints

1. First you will need to initialize a local python environment in the root directory of the project. Run `python3 -m venv venv` while
   in <b>cs490-team4</b> folder.
2. After initializing the virtual environment, it should create a folder in your directory called <b>venv</b>.
3. Next, if the virtual environment did not activate for you, run `source venv/bin/activate`.
4. In your cli, you should see <b>(venv)</b> at the beginning of the prompt.
5. Then, run `pip install -r requirements.txt`. This will install all the packages necessary to run the project.
6. To run the API, in your console type in `fastapi dev backend/app.py`. This should enable the FastAPI endpoints on port 8000. To see the
   swagger with all the explanation head to <b>localhost:8000/docs</b>.

#### How To Run Backend Tests

1. After initializing the packages, run this command in your console: `pytest tests/backend` to run all of the backend python tests.


#### How To Write Tests For Endpoints

1. Import `TestClient` from `fastapi.testclient`.
2. Import the app from `backend/app.py`.
3. To create a test function, write a function that start with `test_<name-of-your-test>`
4. Test it using the command in <b>How To Run Backend Tests</b>. 


#### How To Write An Endpoint

1. Create a new directory inside the `backend` subdirectory with a desired endpoint.
2. Inside of the directory, initialize an ApiRouter.
3. Write the desired endpoint.
4. Import the router into `backend/app.py` and initialize it with `app.include_router(<your-endpoint>)`.
5. Run it with `fastapi dev backend/app.py` to make sure everything is correct.

### FrontEnd Instructions

In the project directory(`frontend/sign-on-form`), you can run:

- ####  `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### For more NODE command options:
Navigate to `frontend/sign-on-form/README.md`



## Endpoints:
  - `Backend server (FastAPI)`: [http://localhost:8000/docs](http://localhost:8000/docs)
  - `Frontend server (React.js)`: [http://localhost:3000](http://localhost:3000)

#### Endpoint Screens:
 ![image](https://github.com/user-attachments/assets/1e5d0dc0-3063-4ea6-8f3b-ce2dbba52d57)
 ![image](https://github.com/user-attachments/assets/b6c0f67e-6ccb-4914-acd9-d68755e99190)

 `Note`: For ease of use, you can go straight to the dashboard page with `http://localhost:3000/dashboard2`
 ![image](https://github.com/user-attachments/assets/b3e71236-b30c-4ebd-9df6-ea6d1434cc8f)

 
