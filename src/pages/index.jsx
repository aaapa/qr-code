import { Routes, Route } from 'react-router-dom';

import QrCodeGenerator from '../components/QrCodeGenerator/QrCodeGenerator';
import QrCodeScanner from '../components/QrCodeScanner/QrCodeScanner';
import GenerateHistory from '../components/GenerateHistory/GenerateHistory';
import ScanHistory from '../components/ScanHistory/ScanHistory';

const IndexPage = () => {
  return (
    <>
     <Routes>
      <Route path="/qr-code" element={<QrCodeGenerator />} />
      <Route path="/qr-code/generate-history" element={<GenerateHistory />} />
      <Route path="/qr-code/scan" element={<QrCodeScanner />} />
      <Route path="/qr-code/scan-history" element={<ScanHistory />} />
     </Routes>
    </>
  )
};

export default IndexPage;