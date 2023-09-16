# Course-Registration

## [Live Link](https://course-regist.netlify.app/)

## Project Features
- Users can click on course cards to add them to their selection list, providing an interactive and user-friendly experience.
- The application intelligently detects and prevents users from selecting the same course multiple times, enhancing user experience and data accuracy.
- Users can view a summary of their selected courses on the right side of the website. This includes the course name, total credit hours, and total price, providing a quick overview of their selection.

## State Management

In this project, state is efficiently managed using React's `useState` hook:

### App.jsx

- **Course Selection:** State variables `courses`, `creditSum`, and `sum` are controlled with `useState`. They track selected courses, total credit hours, and total price.

- **User Feedback:** The `selected` function ensures no duplicates and credit limit checks, displaying toast notifications for user feedback.

### Courses.jsx

- **Data Handling:** We use `useState` to store fetched course data.

- **Efficient Interaction:** Each course card triggers the `selected` function, efficiently interacting with state in the `App` component.
