import { Provider } from 'mobx-react';
import SampleComponent from './SampleComponent';
import RootStore from './Store/RootStore';

function App () {
  const rootStore = new RootStore();
  return (
    <Provider {...rootStore} >
      <SampleComponent />
    </Provider>
  );
}

export default App;
