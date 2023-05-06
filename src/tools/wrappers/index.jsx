import {BrowserRouter} from "react-router-dom"
import {ConfigProvider} from "antd"
import {Provider} from "react-redux"
import store from "./../../redux"
function Wrapper({children}) {
  return (
    <ConfigProvider>
      <BrowserRouter.Provider>
    <Provider store={store}>
     {children}
    </Provider>
      </BrowserRouter.Provider>
      </ConfigProvider>
  )
}

export default Wrapper
