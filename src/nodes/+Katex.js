import { ImPure } from "@design-express/fabrica";
import HandleBars from "handlebars";
// import { KatexWrapper } from "./";
import { useEffect, useState } from "react";
import { KatexWrapper } from "../components/katex";

export class renderer extends ImPure {
  static path = "KaTeX";
  static title = "Renderer";
  static description = "KaTeX Renderer";
  constructor() {
    super({ out: false, in: false });
    this.addInput("update", -1);
    this.addInput("template", "string");
    this.addInput("params", "object");
    this.addOutput("component", "component");
    this.cb = () => {};
    this._cb = () => {
      const _raw = this.getInputData(2);
      if (!_raw) return undefined;
      const _params = this.getInputData(3);
      const _template = HandleBars.compile(_raw);
      return _template(_params);
    };
  }

  onExecute() {
    const that = this;
    function useCB() {
      const [state, setState] = useState(that._cb());
      useEffect(() => {
        that.cb = () => {
          setState(that._cb());
        };
      }, []);
      return state;
    }
    this.setOutputData(1, <KatexWrapper useCB={useCB} />);
  }
  onAction() {
    this.cb?.();
  }
}
