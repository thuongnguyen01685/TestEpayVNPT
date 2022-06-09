import * as React from "react";

function loadError(onError) {
  console.error(`Failed ${onError.target.src} didn't load correctly`);
}

function External() {
  React.useEffect(() => {
    const LoadExternalScript = () => {
      const externalScript = document.createElement("script");
      externalScript.onerror = loadError;
      externalScript.id = "external";
      externalScript.async = true;
      externalScript.type = "text/javascript";
      externalScript.setAttribute("crossorigin", "anonymous");
      document.body.appendChild(externalScript);
      externalScript.src = `https://sandbox.megapay.vn:2810/pg_was/js/payment/layer/paymentClient.js`;
    };
    LoadExternalScript();
  }, []);

  return <></>;
}

export default External;
