import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';

const Index = () => {
  const [value, setValue] = useState('');
  const ref = useRef(null);

  useEffect(() => ref?.current?.focus(), []);

  const styles = {
    padding: '1rem',
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    width: '100vw',
    minHeight: '50vh',
    outline: '1px solid',
    border: 'none',
    margin: '0',
    whiteSpace: 'pre',
    overflow: 'auto',
  };

  return (
    <>
      <Head>
        <title>Caesar Cipher</title>
        <meta description="Caesar Cipher Web App" />
        <meta property="og:title" content="Caesar Cipher" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shift-encrypt.netlify.app" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/846323946144137216/983766375111753728/aa.png"
        />
        <meta property="og:description" content="Caesar Cipher Web App" />
        <meta property="og:site_name" content="Caesar Cipher" />
        <meta name="theme-color" content="#ff006a" />
      </Head>

      <div
        ref={ref}
        style={styles}
        onInput={e => setValue(e.target.innerText)}
        contentEditable
        spellCheck={false}
      />
      <div style={styles}>{shiftRight(value, 1)}</div>
    </>
  );
};

export default Index;

const shiftRight = (str, amount) => {
  const resarr = [];
  for (let charStr of str) {
    const code = charStr.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      resarr.push(addInBound(code, amount, 65, 90));
    } else if (code >= 97 && code <= 122) {
      resarr.push(addInBound(code, amount, 97, 122));
    } else {
      resarr.push(code);
    }
  }
  return String.fromCharCode(...resarr);
};

const addInBound = (a, b, l, u) =>
  b >= 0 ? ((a + b - l) % (u - l + 1)) + l : ((a + b - u) % (u - l + 1)) + u;
