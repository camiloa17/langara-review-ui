import { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

let timer;
export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();
  const onSearchChange = (searchQuery) => {
    clearTimeout(timer);
    setSearchQuery(searchQuery);
    timer = setTimeout(() => history.push(`/search/${searchQuery}`), 500);
  };
  return (
    <Form onSubmit={(e)=>e.preventDefault()} inline>
      <FormControl
        type='text'
        placeholder='Search'
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        className='mr-sm-2'
      />
    </Form>
  );
}
