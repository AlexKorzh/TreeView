import { hot } from 'react-hot-loader/root'
import React, {FormEvent, useState} from 'react'
import { render } from 'react-dom';

import { Input } from './Input';
import { Button } from './Button';
import { TreeItem } from './TreeItem';
import { TreeView } from './TreeView';
import { fetchData } from 'utils';

// https://pipekit.io
// https://github.com
const App = () => {
  const [nodes, setNodes] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query');
    event.currentTarget.reset();

    setIsLoading(true);

    if (query !== null && typeof query === 'string') {
      const data = await fetchData(query);

      if (data) {
        setNodes(data);
        setIsLoading(false);
      }
    }
  }

  const onClear = () => {
    setNodes(null);
  }

  return (
    <div style={{ width: 800, margin: '0 auto' }}>
      <form onSubmit={handleFormSubmit} style={{ width: 400, margin: '0 auto'}}>
        <h3 style={{ textAlign: 'center' }}>Input</h3>
        <Input name='query' />
        <div style={{ display: 'flex', marginTop: 40, justifyContent: 'center' }}>
          <Button onClick={onClear}>Clear</Button>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
      {isLoading ? <h2 style={{ textAlign: 'center' }}>HTML structure is Loading ....</h2> : null}
      {nodes && <TreeView><TreeItem id='1' nodes={nodes}/></TreeView>}
    </div>
  );
}

const HotApp = hot(App)

const root = document.getElementById('root') as HTMLElement
render(<HotApp />, root)
