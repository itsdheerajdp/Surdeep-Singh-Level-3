# Survey Poll - Level 3

## Objective
Build an advanced survey form with dynamic sections, conditional logic, and integration with an external API for fetching additional questions.

## Form Details
The survey form consists of the following fields and functionalities:
- Full Name (Text)
- Email (Email)
- Survey Topic (Dropdown: Technology, Health, Education)
- Dynamic Sections based on Survey Topic:
  - Technology Section (Visible if "Technology" is selected):
    - Favorite Programming Language (Dropdown: JavaScript, Python, Java, C#)
    - Years of Experience (Number)
  - Health Section (Visible if "Health" is selected):
    - Exercise Frequency (Dropdown: Daily, Weekly, Monthly, Rarely)
    - Diet Preference (Dropdown: Vegetarian, Vegan, Non-Vegetarian)
  - Education Section (Visible if "Education" is selected):
    - Highest Qualification (Dropdown: High School, Bachelor's, Master's, PhD)
    - Field of Study (Text)
- Feedback (Textarea)
- Additional Questions fetched dynamically from an external API based on selected Survey Topic

## Features
- Responsive design ensuring usability across devices.
- Form validation for required fields and specific data formats.
- Submission displays a summary of entered data and additional questions with their entered answers.

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

## Setup Instructions

1. Clone the repository:
   
   ```bash
   git clone https://github.com/itsdheerajdp/Surdeep-Singh-Level-3.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Surdeep-Singh-Level-3
   ```


3. Install dependencies:
   
   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```
5. Open your browser and visit http://localhost:3000 to view the application.
