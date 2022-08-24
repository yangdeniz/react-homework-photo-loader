import React, { useState } from 'react';
import PhotoLoader from './photo-loader/photo-loader';
import PhotoPreview from './photo-preview/photo-preview';
import './photo-manager.css';

function PhotoManager() {
  const [items, setItems] = useState([]);
  const addItems = (items) => setItems(prev => [...prev, ...items]);
  const removeItem = (item) => setItems(prev => prev.filter(i => i.id !== item.id));

  return (
    <div className='container'>
      <PhotoLoader onAdd={addItems} />
      <PhotoPreview items={items} onRemove={removeItem} />
    </div>
  )
}

export default PhotoManager;