import NewsItem, { NewsItemProps } from "./NewsItem";
import GridDisplay from "./GridDisplay";

function NewsDisplay({ data }: { data: NewsItemProps[] }) {
  return (
    <GridDisplay cols={3}>
      {data.map((newsItem) => (
        <NewsItem {...newsItem} key={newsItem.id} />
      ))}
    </GridDisplay>
  );
}

export default NewsDisplay;
