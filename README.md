### SampleStore.ts

```
export default class SampleStore {
  @observable value = 0;

  constructor() {
    makeObservable(this);
  }

  @action addOne() {
    this.value = this.value + 1;
  }
}
```

### RootStore.ts

```
class RootStore {
  private sampleStore: SampleStore = new SampleStore();
}
```

### SampleComponent.ts

```
interface IProps {
  sampleStore: SampleStore
}

@inject('sampleStore')
@observer
class SampleComponent extends React.Component<IProps> {
  static defaultProps = {} as IProps; // close the validation of props in development

  render() {
    return (
      <div>
        <div>{this.props.sampleStore.value}</div>
        <button onClick={() => this.props.sampleStore.addOne()}>+1</button>
      </div>
    );    
  }
}
```

### App.ts
```
function App () {
  const rootStore = new RootStore();
  return (
    <Provider {...rootStore} >
      <SampleComponent />
    </Provider>
  );
}
```