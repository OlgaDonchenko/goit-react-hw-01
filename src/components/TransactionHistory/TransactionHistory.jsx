import css from "./TransactionHistory.module.css";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.thUp}>Type</th>
          <th className={css.thUp}>Amount</th>
          <th className={css.thUp}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={css.lineTr}>
            <td className={css.lineTd}>{type}</td>
            <td className={css.lineTd}>{amount}</td>
            <td className={css.lineTd}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
