import clsx from "clsx";
import thStyles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={thStyles.table}>
      <thead
        style={{
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <tr>
          <th className={thStyles["th-head"]}>Type</th>
          <th className={thStyles["th-head"]}>Amount</th>
          <th className={thStyles["th-head"]}>Currency</th>
        </tr>
      </thead>

      {items.map(({ type, amount, currency, id }, index) => (
        <tbody
          className={clsx(index % 2 === 0 ? thStyles.even : thStyles.odd)}
          key={id}
        >
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
