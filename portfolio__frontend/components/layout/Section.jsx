import React from "react";
import { MetaData } from "../../components";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Section = ({
  children,
  title,
  canonicalUrlPath,
  socialCardImage,
  contentType,
}) => {
  return (
    <>
      <MetaData
        title={title}
        canonicalUrlPath={canonicalUrlPath}
        socialCardImage={socialCardImage}
        contentType={contentType}
      />
      <motion.section
        className="flex flex-col gap-10"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
      >
        {children}
      </motion.section>
    </>
  );
};

export default Section;