import Title from './Title';
import { Service } from './data';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Our' subTitle='Services' />

      <div className='section-center services-center'>
        {Service.map((service) => {
          return (
            <article className='service' key={service.id}>
              <span className='service-icon'>
                <i className={service.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{service.name}</h4>
                <p className='service-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
