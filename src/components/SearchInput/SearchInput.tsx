import { Input, InputGroup } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';

const onSearch = (value: string) => console.log(value);

type SearchInputProps = {
  placeholder: string;
  style?: React.CSSProperties;
};
export default function SearchInput({ placeholder, style }: SearchInputProps) {
  return (
    <InputGroup inside style={style}>
      <Input type="search" onChange={onSearch} />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  );
}
