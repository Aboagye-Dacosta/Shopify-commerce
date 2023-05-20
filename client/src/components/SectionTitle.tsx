type SectionTitleProps = {
  title: string;
  description: string;
  styles?: string;
};

function SectionTitle({ title, description, styles }: SectionTitleProps) {
  return (
    <div className={`mt-5 mb-20 ${styles}`}>
      <h1 className="text-[2rem] font-noto font-bold">{title}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default SectionTitle;
