import { Provider } from "react-redux";
import appStore from "./common/store/appStore";
import AppRouterProvider from "./common/providers/router-provider";
import AppQueryProvider from "./common/providers/query-provider";

function App() {
  return (
    <AppQueryProvider>
      <Provider store={appStore}>
        <AppRouterProvider />
      </Provider>
    </AppQueryProvider>
  );
}
export default App;
