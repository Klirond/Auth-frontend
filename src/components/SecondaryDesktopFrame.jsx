export default function SecondaryDesktopFrame({ side }) {
  return (
    <section className={"desktop-frame " + side}>
      <div>
        <h1>Already have an account?</h1>
        <p>Quickly login to continue your journey.</p>
      </div>
      <button className="second-frame-button">Login</button>
    </section>
  );
}
