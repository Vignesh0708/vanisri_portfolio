/// <reference types="vite/client" />
declare module 'emailjs-com' {
    const emailjs: {
      send: (
        serviceId: string,
        templateId: string,
        templateParams: object,
        userId: string
      ) => Promise<any>;
    };
  
    export default emailjs;
  }