import React from 'react';
import shortid from 'shortid';
import './photo-loader.css';

function PhotoLoader(props) {
  const fileToDataUrl = file => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.addEventListener('load', evt => resolve(evt.currentTarget.result));
    fileReader.addEventListener('error', evt => reject(new Error(evt.currentTarget.error)));
    fileReader.readAsDataURL(file);
  })

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    const items = urls.map(url => {
      return { url, id: shortid.generate() }
    });
    props.onAdd(items);
  }

  return (
    <div className='photo-loader'>Click to select
      <input type='file' onChange={handleSelect} />
    </div>
  );
}

export default PhotoLoader;