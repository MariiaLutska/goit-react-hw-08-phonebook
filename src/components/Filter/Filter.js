import { Input } from '@chakra-ui/react';

export const Filter = ({ id, value, onChange }) => {
  return (
    <label>
      Find contacts by name
      <Input
        variant="filled"
        label="Find contacts by name"
        id={id}
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
      />
    </label>
  );
};
