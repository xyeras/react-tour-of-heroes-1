import { useEffect, useState } from 'react';
import HeroCard from '../components/HeroCard';
import '../App.css';

const DashboardPage = () => {
  const [featuredHeroes, setFeaturedHeroes] = useState([]);

  /* TODO: Uncomment useEffect after heroes data set is hooked in */
  // useEffect(() => {
  //   let featured = heroes.filter(hero => hero.featured);

  //   setFeaturedHeroes(featured);
  // }, [heroes]);

  if (featuredHeroes.length === 0) {
    return (
      <div className='row text-center'>
        <div className='col'>
          <h2>Welcome to the tour of Heroes!</h2>
          <h3 className='text-danger'>
            There are no featured heroes to show :0
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div id='dashboard-page'>
      <div className='row text-center mt-3'>
        <div className='col'>
          <h2>Welcome to the tour of Heroes!</h2>
          <h4 className='text-secondary'>Featured Heroes</h4>
        </div>
      </div>
      <div className='row'>
        {featuredHeroes.map((hero, index) => {
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

export default DashboardPage;
