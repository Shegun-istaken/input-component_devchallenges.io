function Input(props) {
  return (
    <div className={props.divClass ? `${props.divClass} inputDiv` : "inputDiv"}>
      <label htmlFor="textinput">{props.label ? props.label : "Label"}</label>
      {props.type !== "textarea" ? (
        <>
          <input
            className={props.className}
            type="text"
            id={props.id}
            placeholder="placeholder"
            value={props.value}
          />
          <p>{props.helperText}</p>
        </>
      ) : (
        <textarea name="" id="" cols={props.cols} rows={props.rows}></textarea>
      )}
    </div>
  );
}

export default Input;
