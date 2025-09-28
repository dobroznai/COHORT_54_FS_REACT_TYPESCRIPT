import Content from "lessons/Lesson_13/components/Content/Content";

import { SectionTitle, SectionWrapper } from "./styles";

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Component</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}

export default Section;
