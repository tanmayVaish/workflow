const Sidebar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <button
        className="save-workflow"
      >
        Save Workflow
      </button>
      <div>
        <div className="description">Workflow Nodes</div>
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "START")}
          draggable
        >
          Start
        </div>
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "FILTER DATA")}
          draggable
        >
          Filter Data
        </div>

        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "WAIT")}
          draggable
        >
          Wait
        </div>

        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "CONVERT FORMAT")}
          draggable
        >
          Convert Format
        </div>

        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "SEND POST REQUEST")}
          draggable
        >
          Send POST Request
        </div>
        <div
          className="dndnode output"
          onDragStart={(event) => onDragStart(event, "END")}
          draggable
        >
          End
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
