import { PureComponent } from "react"
// import { storeContext }from './context'
import { context } from 'react-redux'

export function connect(mapStateProps,mapDispatchProp) {
  return function enhanHOC(WrapperComp) {
     //返回一个处理后的组件
    class enhancement extends PureComponent {
      constructor(props,context) {
        super(props,context)
        this.state = {
          storeState: mapStateProps(context.getState())
        }
      }
      componentDidMount() {
        this.unSub = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateProps(this.context.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unSub()
      }
      render() {
        return <WrapperComp {...this.props} 
                            {...this.state.storeState}
                            {...mapDispatchProp(this.context.dispatch)}/>
      }
    }
    enhancement.contextType = context;
    return enhancement;
  }
}
