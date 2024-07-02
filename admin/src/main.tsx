
import ReactDOM from 'react-dom/client'
import './assets/style/index'
import "@fortawesome/fontawesome-free/css/all.css";
import '@/utils/i18n'
import AppRoutes from './routers/routers';


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppRoutes />
  //  </React.StrictMode> 
)
