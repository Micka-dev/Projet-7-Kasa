import Banner from '../../Components/Banner/banner'
import Collapse from '../../Components/Collapse/collapse'

import '../../Pages/About/about.scss'

import bannerImageAbout from '../../Assets/Banner-img/bannerImageAbout.jpg'
import dataAbout from '../../Datas/dataAbout.json'

function About() {
  return (
    <div className="about-container">
      <Banner source={bannerImageAbout} />
      {dataAbout.map((data) => (
        <Collapse key={data.id} data={data} />
      ))}
    </div>
  )
}

export default About
