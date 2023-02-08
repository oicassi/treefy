const If = ({ children, condition, renderIf = null, renderElse = null }) => {
  const IfElement = children ?? renderIf;
  return condition ? IfElement : renderElse;
};

export default If;
