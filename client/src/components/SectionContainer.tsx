import Container from "./Container";
import SectionTitle from "./SectionTitle";

function SectionContainer({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Container>
      <SectionTitle title={title} description={description} />
      <div className="w-full">{children}</div>
    </Container>
  );
}

export default SectionContainer;
