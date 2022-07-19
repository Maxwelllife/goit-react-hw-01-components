import PropTypes from 'prop-types';
function Statistics({ title = '1', data }) {
  console.log(title);
  return (
    <section className="statistics">
      <h2 className="title">{title && 'UPLOAD STATS'}</h2>
      <ul className="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label"> {label}</span>
            <span className="percentage"> {percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
//
Statistics.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
// dfbsdbfsdbd
export default Statistics;
