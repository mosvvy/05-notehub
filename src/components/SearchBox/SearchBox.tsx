import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBox({ onSubmit }: SearchBoxProps) {
  return (
    <input
      type="text"
      defaultValue={""}
      onChange={onSubmit}
      placeholder="Search posts"
      className={css.input}
    />
  );
}
