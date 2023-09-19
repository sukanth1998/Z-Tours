import Title from './Title';
import { ToursData } from './data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='Featured' subTitle='Tours' />

      <div className='section-center featured-center'>
        {ToursData.map((tData) => {
          return (
            <article className='tour-card' key={tData.id}>
              <div className='tour-img-container'>
                <img src={tData.image} className='tour-img' alt='' />
                <p className='tour-date'>{tData.date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{tData.name}</h4>
                </div>
                <p>{tData.text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {tData.country}
                  </p>
                  <p>{tData.days} days</p>
                  <p>from {tData.price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
