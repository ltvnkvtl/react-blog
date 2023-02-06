import './styles/index.scss';
import {useTheme} from "app/providers/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
