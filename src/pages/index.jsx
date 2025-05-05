import { Routes, Route } from 'react-router-dom';

import QrCodeGenerator from '../components/QrCodeGenerator/QrCodeGenerator';
import QrCodeScanner from '../components/QrCodeScanner/QrCodeScanner';
import GenerateHistory from '../components/GenerateHistory/GenerateHistory';
import ScanHistory from '../components/ScanHistory/ScanHistory';

const IndexPage = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<QrCodeGenerator />} />
      <Route path="/generate-history" element={<GenerateHistory />} />
      <Route path="/scan" element={<QrCodeScanner />} />
      <Route path="/scan-history" element={<ScanHistory />} />
     </Routes>
    </>
  )
};

export default IndexPage;