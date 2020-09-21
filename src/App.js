import React, { useEffect } from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
 
function App() {
 
  const [ data, setData ] = React.useState('Not Found');

  useEffect(() => {
      console.log(data);
  }, [data])
 
  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text)
          else setData('Not Found')
        }}
      />
      <p>{data}</p>
    </>
  )
}
 
export default App;
