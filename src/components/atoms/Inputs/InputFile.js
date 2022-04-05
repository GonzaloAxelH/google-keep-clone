export function InputFile({ file, setFile }) {
  return (
    <input
      onChange={(e) => setFile(e.target.files[0])}
      type="file"
      name="file"
      hidden
      id="inputfile"
    />
  );
}
