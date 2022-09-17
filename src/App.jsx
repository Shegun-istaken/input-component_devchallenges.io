import "./App.css";
import Input from "./components/Input";

export default function App() {
  return (
    <main>
      <h1>Inputs</h1>
      <div className="firstSet">
        <Input />
        <Input label="Hover" />
        <Input label="Focus" />
      </div>

      <div className="secondSet">
        <Input />
        <Input label="Hover" />
        <Input label="Focus" />
      </div>

      <Input label="Disabled" className="disabled" />

      <div className="helperDiv">
        <Input helperText="Here is some helper text" />
        <Input helperText="There's an error" />
      </div>

      <div className="iconDiv">
        <Input />
        <Input />
      </div>

      <Input divClass="fullWidthDiv" label="Full-Width" className="fullWidth" />

      <Input type="textarea" rows="4" cols="18" />

      <small>created by <strong>Shegun</strong>-devchallenges.io</small>
    </main>
  );
}
