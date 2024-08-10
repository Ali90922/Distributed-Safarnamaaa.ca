import React from 'react';
import './App.css';
import ImageComponent from './ImageComponent'; // Import the ImageComponent
import Navbar from './NavBar';
import Footer from './Footer'




import { Link } from 'react-router-dom';
import Scheme from './Schematicz'




function Karimabad(){
  const imageUrl = "Karimabad.JPG";
  return (
    <div className="image-container">
        <img className="enlarged-image" src={imageUrl} alt="Mountain Image" />
        <div className="image-text2">KARIMABAD</div>
        <div className="date-text3">36.3264° N, 74.6643° E</div>


    </div>
  );
}


function Myself() {
  const imageUrl = "AliN.JPG";
  
  return (
    <div className="image-container">
      <div className="container">
  <img className="smaller-image" src={imageUrl} alt="Mountain Image" />
  <div className='Ali-info'>میں علی نواز ہوں، جامعہ مینیٹوبا کے تیسرے سال کے کمپیوٹر سائنس کے میجر۔ پاکستان کے دلفریب مناظر کے درمیان بڑھتے ہوئے، پہاڑوں کو چڑھنے کا شوق مجھے بچپن سے ہی لگ گیا۔ 12 سال کی عمر میں اپنی پہلی چڑھائی پر نکلا، اور اس وقت سے میں نے 6000 سے 7000 میٹر کے بہت سارے پہاڑ چڑھے ہیں۔ یہ ویب سائٹ میری جرات مند سفر کی لمحات کو ظاہر کرنے والا ایک دلفریب پورٹفولیو کے طور پر خدمت کرتا ہے۔ اس کے علاوہ، یہ میری ٹیکنالوجی میں مہارت کی نمائش ہے جس میں AWS کا استعمال کرکے تقسیم شدہ سرور ماڈل کو انجام دیا گیا ہے، اس کے ساتھ ہی میری شخصی مشین کے ساتھ جاوا فریم ورکس جیسے ری ایکٹ کا استعمال کیا گیا ہے۔ اس پلیٹ فارم کو تلاش کریں اور دیکھیں کہ میری پہاڑی کوششوں اور ٹیکنیکل ہنر کو اردو میں کیسے منتقل کیا گیا ہے۔</div>

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



function Home() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9f9' }}>
      <header className="App-header">
        <Navbar /> 
        <Karimabad/>

        
        <Myself/>

        <ImageComponent/>
        <Footer />
      </header>
    </div>
  );
}
export default Home;

