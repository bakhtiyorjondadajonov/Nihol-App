
import {ConfigProvider} from "antd"
import {Provider} from "react-redux"
import store from "./../../redux"
import { BrowserRouter } from "react-router-dom"
import {AuthProvider} from "react-auth-kit"
import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
function Wrapper({children}) {
  const client=new QueryClient()
  return (
    <ConfigProvider>
      <AuthProvider
      authType = {'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
      >
        <QueryClientProvider client={client}>
          <ReactQueryDevtools/>
      <BrowserRouter>
    <Provider store={store}>
     {children}
    </Provider>
      
      </BrowserRouter>
      </QueryClientProvider>
      </AuthProvider>
      </ConfigProvider>
  )
}

export default Wrapper
