import { Button } from 'antd';

type SearchButtonProps = {
  title: string;
  //   onClick: (arg: string) => void;
};

const SearchButton = ({ title }: SearchButtonProps) => {
  return (
    <Button
      onClick={() => {
        console.log(title);
      }}
    >
      {title}
    </Button>
  );
};
export default SearchButton;
