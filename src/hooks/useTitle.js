const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Transcargo`;
  }, [title]);
};

export default useTitle;
