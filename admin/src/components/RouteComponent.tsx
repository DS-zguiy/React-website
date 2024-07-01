import { Route } from "~/types/components";

    interface RouteProps {
        route: Route;
    }


const RouteComponent: React.FC<RouteProps> = ({ route }) => {


    return (<li className="active">
        <a href={`#${route.path}`} className="smooth">
            {<i className={route.icon}></i>}
            <span className="title">{route.title}</span>
        </a>
    </li>)

}



export default RouteComponent