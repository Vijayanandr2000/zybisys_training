// Project: "Event Tracker"

// Description:
// Create an event tracker application that allows users to manage their events. The application should utilize advanced JavaScript functions and closures to provide functionality such as adding events, displaying events, and filtering events based on different criteria.

// Requirements:
// 1. Implement a function to add events. Each event should have a title, date, and location.
// 2. Create a function to display all events, showing the title, date, and location of each event.
// 3. Implement a function to filter events based on a specified date range.
// 4. Create a closure that keeps track of the total number of events added.
// 5. Implement a function to display the total number of events.
// 6. Use higher-order functions such as `map`, `filter`, or `reduce` for manipulating and displaying events.
// 7. Utilize closures to ensure data privacy and encapsulation of event-related information.

// Example Usage:
// ```javascript
// Add events
// addEvent("Meeting 1", "2023-06-21", "Conference Room A");
// addEvent("Meeting 2", "2023-06-22", "Conference Room B");
// addEvent("Workshop", "2023-06-23", "Training Room");

// Display all events
// displayEvents();
// Output:
// Event: Meeting 1
// Date: 2023-06-21
// Location: Conference Room A
// //
// Event: Meeting 2
// Date: 2023-06-22
// Location: Conference Room B
// //
// Event: Workshop
// Date: 2023-06-23
// Location: Training Room

// Filter events by date range
// const filteredEvents = filterEvents("2023-06-21", "2023-06-23");
// displayEvents(filteredEvents);
// Output:
// Event: Meeting 1
// Date: 2023-06-21
// Location: Conference Room A
// //
// Event: Meeting 2
// Date: 2023-06-22
// Location: Conference Room B

// Display the total number of events
// displayTotalEvents();
// Output: Total Events: 3
// ```


// // Event Tracker Application

// class EventTracker {
//     constructor() {
//       this.events = [];
//       this.totalEvents = 0;
//     }
  
//     // Function to add events
//     addEvent(title, date, location) {
//       const event = {
//         title,
//         date,
//         location,
//       };
//       this.events.push(event);
//       this.totalEvents++;
//     }
  
//     // Function to display all events or filtered events
//     displayEvents(filteredEvents = null) {
//       const eventsToDisplay = filteredEvents || this.events;
  
//       eventsToDisplay.forEach((event) => {
//         console.log(`Event: ${event.title}`);
//         console.log(`Date: ${event.date}`);
//         console.log(`Location: ${event.location}`);
//         console.log();
//       });
//     }
  
//     // Function to filter events based on date range
//     filterEvents(startDate, endDate) {
//       return this.events.filter((event) => {
//         return event.date >= startDate && event.date <= endDate;
//       });
//     }
  
//     // Function to display the total number of events
//     displayTotalEvents() {
//       console.log(`Total Events: ${this.totalEvents}`);
//     }
//   }
  
//   // Create an instance of EventTracker
//   const eventTracker = new EventTracker();
  
//   // Add events
//   eventTracker.addEvent("Meeting 1", "2023-06-21", "Conference Room A");
//   eventTracker.addEvent("Meeting 2", "2023-06-22", "Conference Room B");
//   eventTracker.addEvent("Workshop", "2023-06-23", "Training Room");
  
//   // Display all events
//   console.log("All Events:");
//   eventTracker.displayEvents();
  
//   // Filter events by date range
//   console.log("Filtered Events:");
//   const filteredEvents = eventTracker.filterEvents("2023-06-21", "2023-06-23");
//   eventTracker.displayEvents(filteredEvents);
  
//   // Display the total number of events
//   eventTracker.displayTotalEvents();
  


























