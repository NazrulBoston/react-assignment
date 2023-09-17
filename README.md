

### Course Registration ### 
This is a React application for course registration. Users can browse available courses and add them to their cart for registration. Here are some of the key features of this project and how useState is managed:

#### Features ####
1. Course Listing: The app displays a list of available courses retrieved from a JSON file. Users can see details about each course, such as the course name and credit hours.

2. Course Selection: Users can select courses by clicking on the "Add to Cart" button. The selected courses are added to the cart on the right side of the screen. The remaining credit hours and total credit hours are updated accordingly.

3. Credit Hour Limit: The app enforces a credit hour limit of 20. If a user tries to add more courses that exceed this limit, an alert message is displayed, preventing further selections.

  

 #### Managing State with useState ####
The application effectively manages state using the useState hook. Here's how state is used:

courses State: The courses state stores the list of available courses fetched from the data.json file. It is initialized as an empty array and updated using the setCourses function when the component mounts.

selected State: The selected state keeps track of the courses that the user has selected for registration. It is initialized as an empty array and updated using the setSelected function when a user adds or removes a course from their cart.

remaining State: The remaining state represents the remaining credit hours that a user can register for. It is initialized to 0 and is updated using the setRemaining function whenever a course is added or removed from the cart.

totalCost State: The totalCost state stores the total credit hours of the courses selected by the user. It is initialized to 0 and is updated using the setTotalCost function when a course is added or removed from the cart.