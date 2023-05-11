
import {ConfigProvider} from "antd"
import {Provider} from "react-redux"
import store from "./../../redux"
import { BrowserRouter } from "react-router-dom"
import {AuthProvider} from "react-auth-kit"
function Wrapper({children}) {
  return (
    <ConfigProvider>
      <AuthProvider
      authType = {'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
      >
      <BrowserRouter>
    <Provider store={store}>
     {children}
    </Provider>
      
      </BrowserRouter>
      </AuthProvider>
      </ConfigProvider>
  )
}

export default Wrapper
