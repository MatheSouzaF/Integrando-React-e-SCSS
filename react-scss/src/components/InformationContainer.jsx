import "../styles/components/informationcontainer.sass";
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const informationContainer = () => {
  return (
    <section id="information-container">
      <div className="info-card">
        <i>
          <AiFillPhone id="phone-icon" />
        </i>
        <div>
          <h3>Telefone</h3>
          <p>(48)99999-9999</p>
        </div>
      </div>
      <div className="info-card">
        <i>
          <AiOutlineMail id="email-icon" />
        </i>
        <div>
          <h3>E-mail</h3>
          <p>matheus@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <i>
          <AiFillEnvironment id="pin-icon" />
        </i>
        <div>
          <h3>Localização</h3>
          <p>Florianópolis / SC</p>
        </div>
      </div>
    </section>
  );
};

export default informationContainer;
