import { useLayoutEffect, useRef } from "react";
import katex from "katex";

export function KatexWrapper({ useCB, defaultTemplate, ...props }) {
  const ref = useRef();
  const template = useCB(defaultTemplate);
  useLayoutEffect(() => {
    const _ref = ref.current;
    if (template) katex.render(template, _ref);
    return () => {
      // _ref.removeChild(childElem);
    };
  }, [template]);
  return <div {...props} ref={ref} key="katex-component" />;
}
