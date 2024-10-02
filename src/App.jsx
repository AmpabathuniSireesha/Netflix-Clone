import Navbar from './components/Navbar'
// import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Slideshow from './components/SliderShow'
import MovieGrid from './components/MovieGrid'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Slideshow/>
      <MovieGrid/>
      {/* <Homepage/> */}
      <Footer/>
    </div>
  )
}

export default App
