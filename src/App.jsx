
import './App.css'
function App() {

  return (
    <>
       <div className="container">
        <header className="header">
          <ul>
            <li> <a href="#">Products</a></li>
            <li> <a href="#">Use cases</a></li>
            <li> <a href="">Resources</a></li>
            <li> <a href="#">About us</a></li>
            <div className='login'>
            <li> <a href="#">Login</a></li>
            <li className='btn'> <a href="#">Request a demo</a></li>
            </div>         
          </ul>
          <div className="header2">
            <div className="header-wrapper">
            <h1 className="header-txt">Next generation</h1>
            <p className='header-txt2'>Welcome to the next generation of mobile commerce and customer engagement. Meet your mobile customers where they want to be met.</p>

            </div>
         
           
          </div>
          <div className="logos">
            <h3 className="logos-txt">Used by industry leaders</h3>
          </div>
        </header>
        <main>
        <div className="main">
          <h3 className="main-txt">Make mobile journeys easier, faster and frictionless for your clients</h3>
          <div className="main-wrapper">
            <div className="wrapper2">
              <h3 className="wrapper-txt">Easy to use</h3>
              <p className="wrapper-txt2">A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
              <p className="wrapper-txt3">Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</p>
            </div>
            <div className="wrapper2">
              <h3 className="wrapper-txt">Revenue driving</h3>
              <p className="wrapper-txt2">A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
              <p className="wrapper-txt3">Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</p>
            </div>
            <div className="wrapper2">
              <h3 className="wrapper-txt">Integrated with your stack</h3>
              <p className="wrapper-txt2">A complete set of tools to enable marketing teams to easily curate, personalize, contextualize, send, integrate and track campaigns - no coding required.</p>
              <p className="wrapper-txt3">Our software design philosophy is all about the mobile end user, in particular their preference to Tap not Type.</p>
            </div>
          </div>
            </div>
        </main>
      
       </div>

    </>
  )
}

export default App
