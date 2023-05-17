type GridProps = {
  children: React.ReactNode;
  cols: 1 | 2 | 3 | 4;
  className?: string;
};

function GridDisplay({ children, cols,className }: GridProps) {
  const styles =
    cols == 1
      ? "grid-cols-1"
      : cols == 2
      ? "grid-cols-1 md:grid-cols-2"
      : cols == 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : cols == 4
      ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      : null;
  return <div className={`grid gap-5 ${styles} ${className}`}>{children}</div>;
}

export default GridDisplay;
