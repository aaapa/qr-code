import { SCAN_DATA } from '../../contsants';
import { QRCodeSVG } from 'qrcode.react';

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return (
   <>
    <section className="scan-history">
     <div className="scan-history__inner container">
      <h1 className="title">История сканирования</h1>
      <ul className="scan-history__list">
       {
        data.map(text => (
         <li>
          <div className="scan-history__qr-code">
           <span className="scan-history__qr-code-image">
            <QRCodeSVG value={text} />
           </span>
           <span className="scan-history__qr-code-name">{text}</span>
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

export default ScanHistory;