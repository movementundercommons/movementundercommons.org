import { useLocation } from "react-router";
import { SectionId } from "./routing";
import Landing from "./sections/Landing";
import SubSectionContainer from "./sections/SubSectionContainer";
import { useLayoutEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

const App = ({ sectionId }: { sectionId: SectionId }) => {

  let location = useLocation();

  /* On route change, scroll page to top. A slight delay 
  is implemented following layout changes (useLayoutEffect) 
  to account for render times on graphics-heavy pages.
  */
  useLayoutEffect(() => {

    const wait = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);


    return () => clearTimeout(wait);

  }, [location]);

  let content;

  if (sectionId === SectionId.Landing) {

    content = <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Landing />
    </motion.div>

  } else {
    content = <motion.div key={sectionId} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <SubSectionContainer whichSection={sectionId} />
    </motion.div>
  }

  return <AnimatePresence mode="wait">
    {content}
  </AnimatePresence>
}

export default App;
