const Hero = () => {
  return (
    <>
      <h1
      className="md:text-5xl text-3xl px-2 mt-20 md:mt-36"
        style={{
          fontFamily: "Nunito,sans-serif",
          color: "rgb(243, 244, 246)",
        }}
      >
        Why Pay When Your Website Can Host Your Digital Business Cards for Free!
      </h1>

      <p
      className="w-full md:w-2/3 md:text-xl px-2"
        style={{
          color: " rgb(229, 231, 235)",
          marginTop: "2rem",
        }}
      >
        EnBizCard helps you create beautiful, responsive HTML‑based digital
        business cards that can be hosted on your website.
      </p>

      <ul className="points mt-5 md:mt-12 px-2 md:px-0" 
      
      style={{color:'rgb(156, 163, 175)'}}>
        <li>- No sign-up required</li>
        <li>- 100% free and open source</li>
        <li>- No user tracking and data collection</li>
        <li>- works offline</li>
      </ul>

      <div className="buttons mt-5 md:mt-8 px-2 md:px-0" style={{display:'flex',flexWrap:'wrap'}}>
        <button
          className="text-xl md:text-2xl mr-4 md:mr-8"
        style={{backgroundColor:'rgb(5,150,105)',color:'white',padding:'8px 12px',fontFamily:'Nunito,sans-serif',borderRadius:'4px'}}>Create your own</button>
        <button className="text-xl md:text-2xl" style={{backgroundColor:'rgb(55,65,81)',color:'white',padding:'8px 12px',fontFamily:'Nunito,sans-serif',borderRadius:'4px'}}>View Demo</button>
      </div>
      
      <p
      className="px-2" 
      style={{marginTop:'1rem',color:'white'}}>Read the <a href="#hosting" style={{color:'rgb(5,150,105)',textDecoration:'underline'}}>Hosting Guide</a></p>

    </>
  );
};

export default Hero;
