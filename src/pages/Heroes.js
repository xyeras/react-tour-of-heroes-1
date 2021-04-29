import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import HeroCard from '../components/HeroCard';

const HeroesPage = () => {
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { heroes } = useContext(GlobalContext);

  /* TODO: Uncomment useEffect after heroes data set is hooked in */
  useEffect(() => {
    const foundHeroes = heroes.filter(hd => {
      return (
        hd.superhero.toLowerCase().includes(searchTerm.toLowerCase()) +
        hd.alter_ego.toLowerCase().includes(searchTerm.toLowerCase()) +
        hd.publisher.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    searchTerm === ''
      ? setFilteredHeroes(heroes)
      : setFilteredHeroes(foundHeroes);
  }, [searchTerm, heroes]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div id='heroes'>
      <div className='row text-center mt-3'>
        <div className='col'>
          <h2>View our Hero Database!</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='hero-search'
              placeholder='Search for a Superhero'
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        {filteredHeroes.map(hero => {
          return (
            <div className='col-sm-12 col-md-3' key={hero.id}>
              <HeroCard hero={hero} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroesPage;
