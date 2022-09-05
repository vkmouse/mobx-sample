import { inject, observer } from "mobx-react";
import React from "react"
import SampleStore from "./Store/SampleStore";

interface IProps {
  sampleStore: SampleStore
}

@inject('sampleStore')
@observer
class SampleComponent extends React.Component<IProps> {
  static defaultProps = {} as IProps;

  render() {
    return (
      <div>
        <div>{this.props.sampleStore.value}</div>
        <button onClick={() => this.props.sampleStore.addOne()}>+1</button>
      </div>
    );    
  }
}

export default SampleComponent;