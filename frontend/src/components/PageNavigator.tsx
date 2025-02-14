import { CircleArrowLeft, CircleArrowRight } from "lucide-react"

interface PageNavigatorProps {
  currentPage: number;
  totalPages: number;
  goToPage: (newPage: number) => void;
}

const PageNavigator = ({ currentPage, totalPages, goToPage }: PageNavigatorProps) => {

  function handlePrevious() {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  function handleNext() {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex bottom-0 right-0 mb-20 mr-14 z-0 fixed">
        <button
          onClick={handlePrevious}
          className="p-1 cursor-default"
          aria-label="Página anterior">
          <CircleArrowLeft size={24} className="text-white hover:text-grey cursor-pointer transition-colors" />
        </button>
        <span className="min-w-24 text-white text-center self-center">
          {currentPage} de {totalPages}
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
