import "./ProjectItem.css";

const ProjectItem = (props) => {
  return (
    <div className="projectitem">
      <img src={props.img} alt={props.alt} className="projectitem-img" />
      <div className="projectitem-container">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className="projectitem-live-btn">
          <a href={props.live} target="__blank" className="projectitem-live">
            Live
          </a>
        </button>
        <button className="projectitem-code-btn">
          <a href={props.code} target="__blank" className="projectitem-code">
            Code
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
