'use client'

import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import { useState } from "react"

const PageNavigator = ({ currentPage = 1, totalPages = 10 }) => {
  const [page, setPage] = useState(currentPage);

  function handlePrevious() {
    setPage(prev => (prev > 1 ? prev - 1 : prev));
  };

  function handleNext() {
    setPage(prev => (prev < totalPages ? prev + 1 : prev));
  };

  return (
    <>
      <div className="flex absolute bottom-0 right-0 mb-20 mr-14">
        <button
          onClick={handlePrevious}
          className="p-1 cursor-default"
          aria-label="Página anterior">
          <CircleArrowLeft size={24} className="text-white hover:text-grey cursor-pointer transition-colors" />
        </button>
        <span className="min-w-24 text-white text-center self-center">
          {page} de {totalPages}
        </span>
        <button
          onClick={handleNext}
          className="p-1 cursor-default"
          aria-label="Página anterior">
          <CircleArrowRight size={24} className="text-white hover:text-grey cursor-pointer transition-colors" />
        </button>
      </div>
    </>
  )
}

export default PageNavigator;
