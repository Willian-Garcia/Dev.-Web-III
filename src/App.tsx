// <App> conteúdo </App>
// <App prop="valor" prop="valor" />
// App({nome:"Ana",idade:22+1})

import { ContextProvider} from "./contexts/ContextIbge";
import "./index.css";
import Main from "./pages/Main/main";


export default function App() {
  return (
    <ContextProvider>
      <Main />
    </ContextProvider>
  );
}


