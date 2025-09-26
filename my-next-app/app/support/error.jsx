"use client";

export default function SupportError({ error, reset }) {
  return (
    <div>
      <h2>Support page crashed!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
