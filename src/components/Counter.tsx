import { useTodosContext } from "../lib/hooks";

export default function Counter() {
  const { totalNumberOfCompletedTodos, totaNumberOfTodos } = useTodosContext();
  return (
    <p>
      <b>{totalNumberOfCompletedTodos}</b> / {totaNumberOfTodos} todos completed
    </p>
  );
}
