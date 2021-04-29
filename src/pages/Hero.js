import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';

const powers = [
  'super strength',
  'super speed',
  'regeneration',
  'flight',
  'telekinesis',
];

const HeroPage = () => {
  let { heroId } = useParams();
  const [hero, setHero] = useState({
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: [],
    featured: false,
    image_url: '',
  });

  /* TODO: Uncomment useEffect after heroes data set is hooked in */
  // useEffect(() => {
  //   let foundHero = heroes.find(h => h.id === +heroId);
  //   // console.log(foundHero);
  //   setHero(foundHero);
  // }, [hero, heroId, heroes]);

  if (!hero.id) {
    return (
      <div className='row text-center'>
        <div className='col'>
          <h2 className='text-danger'>Sorry! No Hero to show :/</h2>
        </div>
      </div>
    );
  }

  return (
    <div id='hero'>
      <div className='row mt-4'>
        <div className='col'>
          {/* single page hero */}
          <div className='card'>
            <div className='row no-gutters'>
              <div className='col-md-4 th-img-container'>
                {/* <img src={hero.image_url} alt={hero.superhero} /> */}
                <div
                  className='th-hero-img'
                  style={{ backgroundImage: `url(${hero.image_url})` }}></div>
              </div>
              <div className='col-md-8 th-card-body'>
                <div className='card-body'>
                  {/* favorite and publisher section */}
                  <div className='th-card-header d-flex justify-content-between'>
                    <span>
                      <a
                        // onClick={() => updateFeatured(hero.id)}
                        href='javascript:void(0)'>
                        {hero.featured ? (
                          <FaStar style={{ color: 'gold' }} />
                        ) : (
                          <FaRegStar />
                        )}
                      </a>
                    </span>
                    <span>{hero.publisher}</span>
                  </div>
                  {/* hero name */}
                  <div className='th-card-name my-3'>
                    <h2>
                      <span>{hero.alter_ego}, </span>
                      <em>AKA {hero.superhero}</em>
                    </h2>
                  </div>
                  {/* hero details */}
                  <div className='th-card-details'>
                    <div className='detail'>
                      <h4 className='text-primary'>About {hero.superhero}</h4>
                      <p className='ml-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem officia ipsam doloribus eveniet odit sit consectetur
                        aliquid modi nostrum incidunt deleniti recusandae nihil,
                        numquam sed maiores praesentium veritatis tempore nam!
                      </p>
                    </div>
                    <div className='detail'>
                      <h4 className='text-primary'>Powers</h4>
                      <p className='ml-5'>
                        {powers.map((power, i) => {
                          return (
                            <span
                              className='badge badge-pill badge-success mx-1'
                              key={i}>
                              {power}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                    <div className='detail'>
                      <h4 className='text-primary'>First Appearance</h4>
                      <p className='ml-5'>{hero.first_appearance}</p>
                    </div>
                    <div className='detail'>
                      <h4 className='text-primary'>Characters</h4>
                      <p className='ml-5'>
                        {hero.characters?.map((ch, i) => {
                          return (
                            <span key={i}>
                              {ch}
                              {i === hero.characters.length - 1 ? '' : ', '}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
