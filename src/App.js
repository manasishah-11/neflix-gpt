import { Provider } from "react-redux";
import appStore from "./common/store/appStore";
import AppRouterProvider from "./common/providers/router-provider";

function App() {
  return (
    <Provider store={appStore}>
      <AppRouterProvider />
    </Provider>
  );
}
export default App;
