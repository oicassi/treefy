import * as CryptoJS from 'crypto-js';
const SECRET_KEY = process.env.NEXT_PUBLIC_APP_SECRET;

const setItem = (key, value) => {
  const valueToStore = typeof value === 'object' ? JSON.stringify(value) : value;
  const ecnryptedValue = CryptoJS.AES.encrypt(valueToStore, SECRET_KEY).toString();
  sessionStorage.setItem(key, ecnryptedValue);
};

const getItem = (key) => {
  const encryptedData = sessionStorage.getItem(key);
  if (encryptedData === null) return null;
  const data = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY).toString(CryptoJS.enc.Utf8);
  return data;
};

const clear = () => {
  sessionStorage.clear();
};

export { setItem, getItem, clear };
