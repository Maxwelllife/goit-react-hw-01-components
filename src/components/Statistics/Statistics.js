import PropTypes from 'prop-types';
import s from './Statistics.module.css';
function Statistics({ title = ' ', data }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>UPLOAD STATS</h2>}
      <ul className={s.statList}>
        {data.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            style={{ background: getRandomHexColor() }}
          >
            <span className={s.label}> {label}</span>
            <span className={s.percentage}> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
// dfbsdbfsdbd
export default Statistics;
