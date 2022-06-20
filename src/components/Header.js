
const Header = () => {
  return (
    <>
      <div className="header" style={{marginTop:'2rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div className="logo" style={{width:'10rem'}}>
          <img src="./images/icon.png" alt="" srcset="" style={{width:'100%'}}  />
        </div>
        <div className="button">
          <button className="hover:bg-gray-700" style={{border:' 2px solid rgb(55, 65, 81)',borderRadius:'4px',color:'white',padding:'8px 12px',fontWeight:'800'}}>Donate</button>
        </div>
      </div>
    </>
  )
}

export default Header