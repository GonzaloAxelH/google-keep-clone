export default function Input({ onGetValue, value }) {
  return (
    <input
      onChange={onGetValue}
      value={value}
      type="text"
      placeholder="Buscar"
    />
  );
}
