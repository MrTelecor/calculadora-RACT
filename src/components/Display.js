// Display.js
import React from 'react';
import './Display.css';

function Display({ input }) {
  return (
<div className="display">
      {/* Muestra la entrada actual o '0' si está vacía */}
      {input || '0'}
</div>
  );
}

export default Display;
