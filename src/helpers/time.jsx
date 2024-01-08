
const Time = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.toLocaleString('default', { month: 'long' });
  const day = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  return (
    <div>
      <h2>{`${hours}:${minutes}:${seconds}`}</h2>
      <p>{`${day} ${month} ${year}`}</p>
    </div>
  );
};

export default Time;
