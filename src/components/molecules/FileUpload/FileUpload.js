import React, { useState, useEffect } from "react";
function FileUpload({ children, getFile }) {
  const [file, setFile] = useState(null);
  useEffect(() => {
    getFile(file);
  }, [file]);

  const allChilds = React.Children.map(children, (child) => {
    const clone = React.cloneElement(child, {
      file,
      setFile,
    });
    return clone;
  });
  return allChilds;
}

export default FileUpload;
