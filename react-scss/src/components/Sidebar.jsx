import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import Avatar from "../img/matheus-perfil.jpg";

import "../styles/components/sidebar.sass";
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="" />
      <p className="title">Desenvolverdor Front-end</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">
        Donwloand Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
