import { DiHtml5, DiCss3, DiJsBadge, DiPhp, DiSass } from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  {
    id: "html",
    name: "HTML5",
    description:
      "Utilizo o HTML5 para estruturar de maneira semântica o conteúdo das páginas web, garantindo uma base sólida para a construção de interfaces interativas e acessíveis.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description:
      "Minhas habilidades em CSS3 abrangem desde as funcionalidades básicas de estilização até as mais avançadas, permitindo-me criar layouts visualmente atraentes e responsivos, proporcionando uma experiência estética e amigável ao usuário.",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "No domínio do JavaScript, desenvolvo interatividade e dinamismo em minhas aplicações web, utilizando bibliotecas e frameworks para aprimorar a experiência do usuário e tornar as páginas mais ágeis e responsivas.",
    icon: <DiJsBadge />,
  },
  {
    id: "php",
    name: "PHP",
    description:
      "No lado do servidor, confio no PHP para implementar lógica robusta e dinâmica, processando dados, interagindo com bancos de dados e construindo funcionalidades que agregam valor às aplicações web que desenvolvo.",
    icon: <DiPhp />,
  },
  {
    id: "sass",
    name: "SASS",
    description:
      "Adoto o SASS para aprimorar a eficiência na escrita de estilos, organizando e otimizando o código CSS. Com o SASS, consigo manter estilos mais modularizados e facilmente gerenciáveis, contribuindo para uma base de código mais limpa e escalável.",
    icon: <DiSass />,
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="techonology-card" id={tech.id} key={tech.id}>
            <i>{tech.icon}</i>
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
