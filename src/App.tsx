import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageStart } from "./Components/PageStart";
import { PageForm } from "./Components/PageForm";

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="w-screen h-screen bg-blue-100 p-4 grid place-items-center">
      <AnimatePresence exitBeforeEnter>
        {page === 0 && <PageStart key="page-1" onNext={() => setPage(1)} />}
        {page === 1 && <PageForm key="page-2" onBack={() => setPage(0)} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
