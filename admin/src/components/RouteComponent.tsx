import { RouteItem } from "~/types/components";

    interface RouteProps {
        route: RouteItem;
    }


const RouteComponent: React.FC<RouteProps> = ({ route }) => {


    return (<li className="active">
        <a href={`#${route.path}`} className="smooth">
            {<i className={route.path}></i>}
            <span className="title">1111</span>
        </a>
    </li>)

}



export default RouteComponent