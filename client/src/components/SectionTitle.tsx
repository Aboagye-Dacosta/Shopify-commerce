type SectionTitleProps = {
  title: string;
  description: string;
};

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mt-5 mb-20">
      <h1 className="text-[2rem] font-noto font-bold">{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default SectionTitle;
