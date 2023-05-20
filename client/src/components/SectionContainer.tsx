import Container from "./Container";
import SectionTitle from "./SectionTitle";

function SectionContainer({
  children,
  title,
  description,
  titleStyle,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  titleStyle?: string;
}) {
  return (
    <Container>
      <SectionTitle
        title={title}
        description={description}
        styles={titleStyle}
      />
      <div className="w-full">{children}</div>
    </Container>
  );
}

export default SectionContainer;
