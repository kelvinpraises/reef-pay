import React, { useCallback, useEffect, useState } from "react";

export default function CountDownTimer({
  date,
  cancelUrl,
}: {
  date: string;
  cancelUrl: string;
}) {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [end, setEnd] = useState("");

  //   alert(date);

  useEffect(() => {
    timer();
  }, [date]);

  const timer = useCallback(() => {
    // The data/time to countdown to
    var countDownDate = new Date(date).getTime() + 300000;

    // Run myfunc every second
    var myfunc = setInterval(function () {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;

      // Calculating the days, hours, minutes and seconds left
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      // Result is output to the specific element
      if (minutes && seconds) {
        setMinutes(minutes + " minutes");
        setSeconds(seconds + " seconds");
      }

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        setMinutes("");
        setSeconds("");
        setEnd("TIME UP Redirecting....");

        setTimeout(() => {
          // redirect to the fail page
          window.location.href = cancelUrl;
        }, 100);
      }
    }, 1000);
  }, [date]);

  if (date?.length < 1) {
    return null;
  }

  return (
    <div style={{ display: "flex", color: "white" }}>
      <p style={{ color: "white" }}>{minutes}</p> &nbsp; &nbsp;
      <p style={{ color: "white" }}>{seconds}</p>
      <h2 style={{ color: "white" }}>{end}</h2>
    </div>
  );
}
