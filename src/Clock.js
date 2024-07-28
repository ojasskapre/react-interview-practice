import { useState, useEffect } from 'react';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  function get24HrFormattedHour(date) {
    const hours = date.getHours();
    return hours < 10 ? '0' + hours : hours;
  }

  function get12HrFormattedHour(date) {
    const hours = date.getHours() % 12;
    return hours === 0 ? '12' : hours < 10 ? '0' + hours : hours;
  }

  return (
    <div>
      <div class="clock-container">
        <p>{get24HrFormattedHour(date)}</p>
        <p>:</p>
        <p>{date.getMinutes()}</p>
        <p>:</p>
        <p>{date.getSeconds()}</p>
      </div>
      <div class="clock-container">
        <p>{get12HrFormattedHour(date)}</p>
        <p>:</p>
        <p>{date.getMinutes()}</p>
        <p>:</p>
        <p>{date.getSeconds()}</p>
      </div>
    </div>
  );
}
