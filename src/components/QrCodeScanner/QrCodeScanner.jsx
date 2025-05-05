import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

import { SCAN_DATA } from '../../contsants';

const QrCodeScanner = () => {
  const [ scanned, setScanned ] = useState('');

  const QrCode = result => {
   setScanned(result[0].rawValue);

   const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

   localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
  };

  return (
   <>
    <section className="qr-code-scanner">
     <div className="qr-code-scanner__inner container">
      <h1 className="qr-code-scanner__title">Сканнер QR-кодов</h1>
      <div className="qr-code-scanner__wrapper">
       <Scanner onScan={QrCode} sound={false} />
       <span className="qr-code-scanner__name">{scanned}</span>
      </div>
     </div>
    </section>
   </>
  )
};

export default QrCodeScanner;