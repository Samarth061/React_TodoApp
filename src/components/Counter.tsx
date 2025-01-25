type CounterProps = {
  totaNumberOfTodos: number;
  totalNumberOfCompletedTodos: number;
};

export default function Counter({
  totaNumberOfTodos,
  totalNumberOfCompletedTodos,
}: CounterProps) {
  return (
    <p>
      <b>{totalNumberOfCompletedTodos}</b> / {totaNumberOfTodos} todos completed
    </p>
  );
}
