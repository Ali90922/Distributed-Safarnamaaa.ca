import React from 'react';

const GoogleMap: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', margin: '20px 0', borderTop: '2px dashed #ccc', borderBottom: '2px dashed #ccc' }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', maxWidth: '1200px', width: '100%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46061.46939766316!2d76.3341245!3d35.2807337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fb4eaafd9d3201%3A0x1736204892b8ece6!2sK6!5e1!3m2!1sen!2sus!4v1680070374408!5m2!1sen!2sus&layer=c"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div style={{ marginLeft: '20px', maxWidth: '500px' }}>
          <p style={{ textAlign: 'right', direction: 'rtl', lineHeight: '1.6' }}>
            لاہور سے گلگت بلتستان کے کاندے گاؤں تک پہنچنے کے لیے آپ کو سب سے پہلے اسلام آباد جانا ہوگا۔ وہاں سے آپ قراقرم ہائی وے پر سفر کرتے ہوئے گلگت پہنچیں گے۔ گلگت سے سکردو کے لیے بس یا جیپ لیں اور پھر سکردو سے کاندے گاؤں کے لیے جیپ یا کوسٹر پر سفر کریں۔ کاندے گاؤں سے ٹریک کا آغاز کریں اور 4-5 گھنٹے کی پیدل سفر کے بعد تانگوس گاؤں پہنچیں۔ تانگوس گاؤں سے مزید 6-7 گھنٹے کی پیدل سفر کے بعد منگو بیس کیمپ پہنچیں۔ منگو بیس کیمپ میں ایک دن آرام کریں اور ارد گرد کے خوبصورت نظاروں کا لطف اٹھائیں۔ منگو بیس کیمپ سے مزید 5-6 گھنٹے کی پیدل سفر کے بعد نگما وادی پہنچیں۔ نگما وادی میں مختلف ٹریکنگ روٹس اور قدرتی خوبصورتی کا لطف اٹھائیں۔ اس دوران آپ کو بلند پہاڑوں، سرسبز وادیوں اور دلکش جھیلوں کے مناظر دیکھنے کو ملیں گے۔ نگما وادی میں قیام کے دوران، آپ مختلف ٹریکنگ روٹس کا تجربہ کر سکتے ہیں اور یہاں کی قدرتی خوبصورتی کا مشاہدہ کر سکتے ہیں۔ اس وادی میں موجود مختلف چوٹیوں پر چڑھنے کا موقع بھی ملتا ہے، جہاں سے آپ کو پورے علاقے کا ایک وسیع نظارہ حاصل ہوگا۔ نگما وادی کی سیر کے دوران، آپ کو یہاں کے مقامی لوگوں کی مہمان نوازی کا بھی موقع ملے گا، جو کہ اس علاقے کی ثقافت کا ایک اہم حصہ ہے۔ یہ سفر نہ صرف قدرتی خوبصورتی کا حامل ہے بلکہ ایک ایڈونچر سے بھرپور تجربہ بھی ہے، جو آپ کی یادوں میں ہمیشہ زندہ رہے گا۔
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;