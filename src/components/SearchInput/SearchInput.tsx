import { Input, Space } from 'antd';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

type SearchInputProps = {
  placeholder: string;
  style?: React.CSSProperties;
};
export default function SearchInput({ placeholder, style }: SearchInputProps) {
  return (
    <Search
      placeholder={placeholder}
      allowClear
      onSearch={onSearch}
      style={style}
    />
  );
}
