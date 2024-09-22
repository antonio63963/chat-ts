import React from 'react';
import { Archive } from 'phosphor-react';

import './ArchiveButton.css';

interface IArchiveButtton {
  onClick: () => void;
}

function ArchiveButton({onClick}: IArchiveButtton) {
  return (
    <button className='archiveButton' onClick={onClick}>
      <Archive size={16}/>
      <span className='archiveButton__text'>Archived</span>
    </button>
  )
}

export default ArchiveButton