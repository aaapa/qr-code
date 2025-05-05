import { GENERATE_DATA } from '../../contsants';
import { QRCodeSVG } from 'qrcode.react';

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  
  return (
   <>
    <section className="generate-history">
     <div className="generate-history__inner container">
      <h1 className="title">История генерирования</h1>
      <ul className="generate-history__list">
       {
        data.map(text => (
         <li>
          <div className="generate-history__qr-code">
           <span className="generate-history__qr-code-image">
            <QRCodeSVG value={text} />
           </span>
           <span className="generate-history__qr-code-name">{text}</span>
          </div>
         </li>
        ))
       }
      </ul>
     </div>
    </section>
   </>
  );
};

export default GenerateHistory;