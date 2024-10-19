import React from 'react';
import './App.css';
import ImageComponent from './ImageComponent'; // Import the ImageComponent
import Navbar from './NavBar';
import Footer from './Footer'
import AboutMe from './AboutMe'
import Home from './Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import



import { Link } from 'react-router-dom';
import Scheme from './Schematicz'






function Myself() {
  const imageUrl = "AliN.JPG";
  
  return (
    <div className="image-container">
      <div className="container">
  <img className="smaller-image" src={imageUrl} alt="Mountain Image" />
  <div className='Ali-info'>I'm Ali Nawaz, a third-year Computer Science major at the University of Manitoba. Growing up amidst the awe-inspiring landscapes of Pakistan, mountaineering became my passion from a young age. Embarking on my first ascent at 12, I've since conquered numerous peaks ranging from 6000 to 7000 meters in height. This website serves as a captivating portfolio, showcasing the remarkable moments captured during my adventurous expeditions. Furthermore, it exemplifies my adeptness in technology through the implementation of a distributed server model utilizing AWS alongside my personal machine, coupled with the utilization of Java frameworks like React. Explore this platform to witness the fusion of my mountainous endeavors and technical prowess.</div>
  <div className='Ali-info'>میں علی نواز ہوں، جامعہ مینیٹوبا کے تیسرے سال کے کمپیوٹر سائنس کے میجر۔ پاکستان کے دلفریب مناظر کے درمیان بڑھتے ہوئے، پہاڑوں کو چڑھنے کا شوق مجھے بچپن سے ہی لگ گیا۔ 12 سال کی عمر میں اپنی پہلی چڑھائی پر نکلا، اور اس وقت سے میں نے 6000 سے 7000 میٹر کے بہت سارے پہاڑ چڑھے ہیں۔ یہ ویب سائٹ میری جرات مند سفر کی لمحات کو ظاہر کرنے والا ایک دلفریب پورٹفولیو کے طور پر خدمت کرتا ہے۔ اس کے علاوہ، یہ میری ٹیکنالوجی میں مہارت کی نمائش ہے جس میں AWS کا استعمال کرکے تقسیم شدہ سرور ماڈل کو انجام دیا گیا ہے، اس کے ساتھ ہی میری شخصی مشین کے ساتھ جاوا فریم ورکس جیسے ری ایکٹ کا استعمال کیا گیا ہے۔ اس پلیٹ فارم کو تلاش کریں اور دیکھیں کہ میری پہاڑی کوششوں اور ٹیکنیکل ہنر کو اردو میں کیسے منتقل کیا گیا ہے۔</div>

</div>


      
    </div>
  );
}
function PeaksClimbed() {
  
  return (
    <center>
    <h5>Summits endeavored | ہاڑوں کو فتح کیا</h5>
</center>
  );
}



function HoweSound(){
  const imageUrl = "HoweSound.JPG";
  return (
    <div className="image-container">
        <img className="enlarged-image" src={imageUrl} alt="Mountain Image" />
        <div className="image-text55">آنویل آئلینڈ</div>
        <div className="date-text22">Sunday - Jun 27,2023 - 7:57 am Google Pixel 7</div>
        <div className="date-text5">49.4725° N, 123.2759° W</div>


    </div>
  );
}


function Web() {
  const imageUrl = "Web.JPG";
  
  return (
    <div className="image-container">
      <div className="container">
  <img className="smaller-image" src={imageUrl} alt="Mountain Image" />
  <div className='Ali-info'>Employed a combination of AWS services and their personal iMac to craft a bespoke, in-house hosting solution for their website.</div>


</div> 
    </div>
  );
}





function Climbed() {
  
  const imageUrl = "Laila.JPG";
  const imageUrl2 = "Screenshot 2024-03-29 at 7.48.44 AM.png";
  const imageUrl3 = "Screenshot 2024-03-29 at 8.11.28 AM.png";
  return (
    <div className="image-container">
      <div className="container">

  <img className="smaller-image" src={imageUrl} alt="Mountain Image" />
  
  <div className='Ali-info22'><p>In my climbing odyssey, I began my quest amidst the awe-inspiring valleys of Balakot, Pakistan. At a tender age of 12, I embarked on my inaugural ascent, tackling the formidable Musa ka Musalla, alongside a group of intrepid companions.</p>

<p>As I ventured deeper into the realm of mountaineering, I found myself drawn to increasingly challenging peaks. Among these was the renowned Tight Peak in Naran, where I faced daunting cliffs and unforgiving terrain. Despite the trials, each ascent served as a testament to my growing resolve and determination.</p>

<p>However, it was in the lofty realms of 6000 to 7000-meter peaks where I truly tested my mettle. Here, amidst the majestic heights of mountains like Broad Peak and Nanga Parbat, I confronted my most formidable adversaries. While some summits welcomed me with open arms, others proved to be humbling reminders of nature's untamed power.</p>

<p>Indeed, the journey to these towering summits demands more than just physical prowess—it requires a profound reservoir of mental strength and unwavering determination. Scaling these peaks necessitates a delicate balance of skill, strategy, and sheer willpower, as every step forward is a testament to the resilience of the human spirit.</p>

<p>Through both triumph and defeat, I've learned invaluable lessons about the indomitable nature of the human spirit. Each ascent, whether successful or not, has shaped me into the climber—and the person—I am today. And as I continue to explore the boundless heights of the world's most majestic peaks, I carry with me the lessons learned and the spirit forged in the valleys of Balakot.</p>

</div>
  <img className="smaller-image" src={imageUrl3} alt="Mountain Image" />
</div>
     
    </div>
  );
}


(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '65cadda6aeef469764c1752a' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production'
    });
  }
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');



function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9f9' }}>
   
        <Routes>
          {/* Define routes */}
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/" element={<Home />} />
          <Route path="/Victoria" element={<Home />} />



        </Routes>
    </div>
  );
}
export default App;

