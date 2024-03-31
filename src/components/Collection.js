import './Collection.css';

const Collection = () => {



  return (
    <div className='collection-section'>
      <div className="content-box">
        <h1>Collection Spotlight</h1>
        <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      </div>

      <div className="content-cards">
        <div className="content-card">
          {/* <span className='round1'></span> */}
          <span className='line1'></span>
          {/* <span className='round2'></span> */}
          <img src="../image4.jpeg" alt="" />
          <h3>Las Vegas Aviators</h3>
          <p className="date">OCT 15 | SUN | 4:30 PM</p>
          <p className='address'>Las Vegas Ballpark, Las Vegas, Nevada</p>
          <button className='btn'>Take Flight Collection</button>
        </div>
        <div className="content-card">
          {/* <span className='round3'></span> */}
          <span className='line2'></span>
          {/* <span className='round4'></span> */}
          <img src="../image4.jpeg" alt="" />
          <h3>Las Vegas Aviators</h3>
          <p className="date">OCT 15 | SUN | 4:30 PM</p>
          <p className='address'>Las Vegas Ballpark, Las Vegas, Nevada</p>
          <button className='btn'>Take Flight Collection</button>
        </div>
        <div className="content-card">
          {/* <span className='round5'></span> */}
          <span className='line3'></span>
          {/* <span className='round6'></span> */}
          <img src="../image4.jpeg" alt="" />
          <h3>Las Vegas Aviators</h3>
          <p className="date">OCT 15 | SUN | 4:30 PM</p>
          <p className='address'>Las Vegas Ballpark, Las Vegas, Nevada</p>
          <button className='btn'>Take Flight Collection</button>
        </div>
      </div>

    </div>
  )
}

export default Collection
