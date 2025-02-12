'use client'

import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Chevron = () => {
  const [rotateChevron, setRotateChevron] = useState(false);

  const handleRotate = () => setRotateChevron(!rotateChevron);

  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)"

  return (
    <ChevronDown className="text-white align-middle text-right ml-5" style={{ transform: rotate, transition: "all 0.2s linear" }} onClick={handleRotate} />
  )
}

export default Chevron;