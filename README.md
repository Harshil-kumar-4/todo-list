# Flask Todo List Application

A modern todo list application built with Flask, featuring user authentication and a clean, responsive UI.

## Features

- User registration and login system
- Email and phone number authentication
- Secure password handling
- Personal todo list for each user
- Add tasks with additional details
- Mark tasks as complete
- Delete individual tasks
- Clear all completed tasks
- Modern and responsive UI

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Python 3.8 or higher
- pip (Python package installer)
- Git (optional, for cloning the repository)

## Installation

1. Clone the repository (or download and extract the ZIP file):
   ```bash
   git clone <repository-url>
   cd todo-list
   ```

2. Create a virtual environment:
   ```bash
   # On Windows
   python -m venv venv
   
   # On macOS/Linux
   python3 -m venv venv
   ```

3. Activate the virtual environment:
   ```bash
   # On Windows
   .\venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

4. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Application

1. Make sure your virtual environment is activated (see step 3 above)

2. Run the Flask application:
   ```bash
   python app.py
   ```

3. Open your web browser and navigate to:
   ```
   http://localhost:5000
   ```

## Usage

1. Register a new account:
   - Click on "Register" link
   - Enter your email address
   - Enter your phone number (10 digits)
   - Create a password
   - Confirm your password
   - Click "Register"

2. Login:
   - Enter your email or phone number
   - Enter your password
   - Click "Login"

3. Using the Todo List:
   - Add a new task by typing in the task input field
   - Add additional details in the second input field (optional)
   - Click "Add Task" or press Enter to add the task
   - Mark tasks as complete by clicking the checkbox
   - Delete individual tasks using the delete button
   - Clear all completed tasks using the "Clear Completed Tasks" button
   - Logout using the button in the top-right corner

## Project Structure

```
todo-list/
├── app.py              # Flask application and routes
├── requirements.txt    # Python dependencies
├── static/
│   ├── auth.css       # Authentication pages styling
│   ├── index.css      # Todo list styling
│   └── index.js       # Todo list frontend logic
├── templates/
│   ├── index.html     # Todo list template
│   ├── login.html     # Login page template
│   └── register.html  # Registration page template
└── todo.db            # SQLite database (created automatically)
```

## Security Features

- Passwords are securely hashed using Werkzeug's security functions
- User sessions are managed securely using Flask-Login
- Input validation for email and phone number
- Protection against unauthorized access to tasks
- CSRF protection enabled by default

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.
