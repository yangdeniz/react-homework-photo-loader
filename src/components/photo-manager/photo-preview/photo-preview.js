import React from 'react';
import PhotoPreviewItem from './photo-preview-item/photo-preview-item';
import './photo-preview.css';

function PhotoPreview(props) {
  const { items } = props;
  return (
    <div className='photo-preview'>
      {items.map(item => <PhotoPreviewItem key={item.id} url={item.url} onRemove={() => props.onRemove(item)} />)}
    </div>
  );
}

export default PhotoPreview;