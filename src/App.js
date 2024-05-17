import React, { useState, useEffect } from 'react';

function App() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://geodata-production.up.railway.app/api/v1/cities/all')
        .then(response => response.json())
        .then(data => setCities(data))
        .catch(error => console.error('Ошибка при получении данных:', error));
  }, []);

  return (
      <div className="App">
        <h2>Список городов</h2>
        <table>
          <thead>
          <tr>
              <th>Название</th>
              <th>Долгота</th>
              <th>Широта</th>
          </tr>
          </thead>
          <tbody>
          {cities.map((city, index) => (
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.latitude}</td>
                <td>{city.longitude}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

export default App;