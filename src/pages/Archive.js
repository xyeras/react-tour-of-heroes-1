import { useState, useEffect } from 'react';

const ArchivePage = () => {
  const [archivedHeroes, setArchivedHeroes] = useState([]);
  const [archivedHero, setArchivedHero] = useState({});

  const fetchHeroes = async () => {
    try {
      let response = await fetch(
        'https://private-anon-de9b7704f1-superheroes.apiary-mock.com/characters/'
      );
      let { Characters } = await response.json();
      setArchivedHeroes(Characters);

      //   console.log('my characters array', Characters);
    } catch (err) {}
  };

  const fetchSingleHero = async heroId => {
    try {
      let hero = await fetch(
        `https://private-anon-de9b7704f1-superheroes.apiary-mock.com/characters/${heroId}`
      );
      hero = await hero.json();
      setArchivedHero(hero);
    } catch (err) {}
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div id='archived'>
      <div className='row text-center'>
        <div className='col'>
          <h2>View our Archived Heroes!</h2>
          <h5 className='text-secondary'>
            Click on a Hero Below to view details!
          </h5>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <ul className='list-group'>
            {archivedHeroes.map((hero, index) => {
              return (
                <li className='list-group-item' key={index}>
                  <a
                    href='javascript:void(0)'
                    onClick={() => fetchSingleHero(hero.id)}>
                    {hero.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-sm-12 col-md-8'>
          {archivedHero.id ? (
            <div className='card'>
              <img src={archivedHero.picture} alt={archivedHero.name} />
              <div className='card-body'>
                <h2>{archivedHero.name}</h2>
                <p>{archivedHero.description}</p>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
