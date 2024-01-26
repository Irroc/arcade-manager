const newGameHandler = async (event) => {
  event.preventDefault();

  function converToTinyInt(toTest) {
    if (toTest === true) {
      return 1
    }
    else return toTest = 0
  }

  const name = document.querySelector('#game-name').value.trim();
  let cost = document.querySelector('#game-cost').value.trim();
  const manufacturer = document.querySelector('#game-manufacturer').value.trim();
  const type_of_cabinet = document.querySelector('#game-type_of_cabinet').value.trim();
  let has_tickets = document.querySelector('#game-has_tickets').checked;
  let has_prizes = document.querySelector('#game-has_prizes').checked;
  const locations_id = 1
  if (name && cost && manufacturer && type_of_cabinet && has_tickets !== null && has_prizes !== null) {

    cost = Number(cost)
    has_tickets = converToTinyInt(has_tickets)
    has_prizes = converToTinyInt(has_prizes)

    const response = await fetch(`/api/games/`, {
      method: 'POST',
      body: JSON.stringify({ name, cost, manufacturer, type_of_cabinet, has_tickets, has_prizes, locations_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/create');
      alert('Created Game!');
    } else {
      alert('Failed to Create Game!');
    }
  }
};

const NewLocationHandler = async (event) => {
  event.preventDefault();
  
  const name = document.querySelector('#location-name').value.trim();
  const address = document.querySelector('#location-address').value.trim();
  const phone_number = document.querySelector('#location-phone_number').value.trim();

  if (name && address && phone_number) {
    const response = await fetch(`/api/locations/`, {
      method: 'POST',
      body: JSON.stringify({ name, address, phone_number }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/create');
      alert('Created Location!');
    } else {
      alert('Failed to Create Game!');
    }
  }
};

document
  .querySelector('.new-game-form')
  .addEventListener('submit', newGameHandler);

document
  .querySelector('.new-location-form')
  .addEventListener('click', NewLocationHandler);
