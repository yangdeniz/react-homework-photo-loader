import React from 'react';
import './photo-preview-item.css';

function PhotoPreviewItem(props) {
  return (
    <div className='photo-preview__item'>
      <img src={props.url} alt='' />
      <button className='btn__remove' onClick={props.onRemove}></button>
    </div>
  );
}

export default PhotoPreviewItem;