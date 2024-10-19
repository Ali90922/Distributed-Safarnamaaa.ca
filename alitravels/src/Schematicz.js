import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer'
import GoogleMap from './GoogleMap'; // Import the GoogleMap component
import PhotoGallery from './PhotoGallery';
import Gal from './Gal'
import Gall from './Gal2'
import Galll from './Gal3'




// Nangma Page
function Fort() {
  const imageUrl = "./Nangma.JPG";
  return (
    <div className="image-container">
      <img className="enlarged-image-Nangma" src={imageUrl} alt="Mountain Image" />
      <div className="image-text">NANGMA</div>
    </div>
  );
}



function GreenNangma() {
  const imageUrl = "./Nangma_Green.JPG";
  return (
    <div className="image-container">
      <img className="enlarged-image-Nangma" src={imageUrl} alt="Mountain Image" />
      <div className="image-text">شنگو چھرپا</div>
      <div className="date-text">July 21 - 2024 - 5:28 PM iPhone 15</div>
      <div className="date-text4">35°21′14″N 76°26′30″E</div>


    </div>
  );
}
function Nangmainfo(){
  const imageUrl = "Minglou.jpg";

  return (
    <div className="image-container">
      <div className="container">
  <img className="smaller-image" src={imageUrl} alt="Mountain Image" />
  <div className='Ali-info'>نگما وادی گلگت بلتستان، پاکستان میں واقع ہے اور یہ ہشے وادی کے قریب ہے۔ نگما وادی اپنی خوبصورتی، بلند پہاڑوں اور چٹانوں کی وجہ سے مشہور ہے۔ یہ وادی خاص طور پر کوہ پیمائی اور ٹریکنگ کے شوقین لوگوں کے لیے ایک معروف مقام ہے۔
نگما وادی کی تاریخ میں یہ بتایا جاتا ہے کہ یہاں مختلف قبائل اور اقوام کا بسیرا رہا ہے۔ یہ علاقہ بدھ مت اور بعد میں اسلامی اثرات کی وجہ سے مختلف تہذیبی تبدیلیوں کا شکار رہا ہے۔ نگما وادی میں موجود پرانے قلعے اور آثار قدیمہ اس بات کی گواہی دیتے ہیں کہ یہاں ایک بھرپور تاریخ رہی ہے۔
نگما وادی کی خوبصورتی کی بات کی جائے تو یہاں کے بلند و بالا پہاڑ، ہریالی، اور خوبصورت جھیلیں سیاحوں کو اپنی طرف کھینچتی ہیں۔ یہ وادی خاص طور پر موسم گرما میں بہت زیادہ پرکشش ہوتی ہے جب یہاں کے درخت پھولوں سے لدے ہوتے ہیں اور قدرتی نظارے اپنی تمام تر دلکشی کے ساتھ سامنے آتے ہیں۔
اس وادی میں کوہ پیمائی کے مواقع بھی بہت زیادہ ہیں اور یہاں کے بلند چوٹیوں پر چڑھنے کے لیے دنیا بھر سے لوگ آتے ہیں۔ نگما وادی میں مختلف ٹریکنگ روٹس بھی موجود ہیں جو کہ ایڈونچر کے شوقین افراد کے لیے بہترین ہیں۔




</div>


</div>
      
    </div>
  );
}






function Camp() {
  const imageUrl = "./Camp.JPG";
  return (
    <div className="image-container">
      <img className="enlarged-image-Nangma" src={imageUrl} alt="Mountain Image" />
      <div className="image-text"></div>
      <div className="date-text"></div>
      <div className="date-text4"></div>


    </div>
  );
}



function Schematicz() {
  return (
    <div className="App" style={{ backgroundColor: '#f8f9f6' }}>
      <header className="Ali" style={{}}>
        {/* Add a blank div with a height of 20px */}
        <div style={{ height: '20px' }}></div>
        <Navbar />
        <Fort />
        <Nangmainfo/>
        <GoogleMap />
        <GreenNangma/>

        <Footer />

      </header>
    </div>
  );
}

export default Schematicz;
