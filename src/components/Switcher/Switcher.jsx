import './Switcher.css'
import { useState } from 'react';

const Switcher = () => {
  const [switched, setSwitched] = useState(true)

  const toggleSwitcher = () => {
    setSwitched(!switched)
  }

  return (
    <div 
      className={`switcher ${switched ? 'active' : ''}`}
      onClick={toggleSwitcher}
    >
      <div className='switcher__circle'></div>
    </div>
  )
}

export default Switcher;