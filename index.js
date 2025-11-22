//Task 2: Declare and Initialize an Attendee Object.

const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.0,
};

//Task 3: Function to log Attendee Name

function logAttendeeName(attendee) {
  console.log(attendee.name);
}
//Task 4: Function to log Ticket Price

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

//Task 5: Function to Update Ticket Type

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

//Function to Update Ticket Price

function updateTicketPrice(attendee, newPrice) {
  attendee.ticketPrice = newPrice;
}

//Function to remove Event Property

function removeEventProperty(attendee) {
  delete attendee.event;
}

//Function to add Checkedin Peoperty

function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};