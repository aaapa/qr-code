import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { GENERATE_DATA } from '../../contsants';

const QrCodeGenerator = () => {
  const [ value, setValue ] = useState('');
  const [ result, setResult ] = useState('');

  const generateQRCode = event => {
    event.preventDefault()
    
    setResult(value);
    setValue(''); 

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
   
    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));
  };

  const getInputValue = event => {
   setValue(event.currentTarget.value);
   setResult('');
  };

  const gradientId = 'grad';

  return (
    <section className="qr-code-generator">
     <div className="qr-code-generator__inner container">
      <h1 className="title">Генератор QR-кодов</h1>
      {
        result && 
        <div className="qr-code-generator__qr-code">
         <span className="qr-code-generator__qr-code-image">
         <svg width="100%" height="100%" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <defs>
           <linearGradient id={gradientId} gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="rgb(21,89,142)" />
            <stop offset="95%" stopColor="rgb(0,0,0)" />
           </linearGradient>
          </defs>

           <QRCodeSVG value={result} size={256} bgColor="#ffffff" fgColor={`url(#${gradientId})`} />
          
          </svg>
         </span>
         <h6 className="qr-code-generator__qr-code-title">{result}</h6>
        </div>
      }
      <form className="qr-code-generator__form" onSubmit={generateQRCode}>
       <label className="qr-code-generator__input-wrapper">
        <input className="qr-code-generator__input" onChange={getInputValue} type="text" placeholder="" value={value} name="qr-code-generator-input" autoComplete="off" aria-describedby="qr-code-generator-input-placeholder" aria-required="true" required />
        <span className="qr-code-generator__input-placeholder" id="qr-code-generator-input-placeholder">Введите текст или ссылку</span>
       </label>
       <button className="qr-code-generator__form-button" type="submit">
        <span>Сгенерировать</span>
       </button>
      </form>
     </div>
    </section>
  );
};

export default QrCodeGenerator;