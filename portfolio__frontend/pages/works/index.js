import React from "react";
import { MainSection, Article, Paragraph, WorksGrid } from "../../components";
import { worksQuery } from "../../constants/queries";
import { client } from "../../sanity/client";

const Works = ({ works }) => {
  return (
    <MainSection title="Works" canonicalUrlPath="/works">
      <Article title="Works" delay={0.1}>
        <Paragraph>
          These are some of my favorite projects that I have built, each one of
          them taught me different things during their development process.
        </Paragraph>
      </Article>
      <WorksGrid data={works} />
    </MainSection>
  );
};

export async function getStaticProps() {
  const worksInfo = worksQuery();
  const works = await client.fetch(worksInfo);

  return {
    props: {
      works,
    },
  };
}

export default Works;
