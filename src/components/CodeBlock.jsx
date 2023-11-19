import { CopyBlock, dracula } from "react-code-blocks";

function CodeBlock(props) {
  return (
    <>
      <CopyBlock
        text={props.code}
        language={props.language}
        showLineNumbers={props.showLineNumbers}
        codeBlock="false"
        theme={dracula}
      />
    </>
  );
}

export default CodeBlock;
