import chefIcon from "../assets/chef.png";
export function Header() {
  return (
    <section className="header">
      <button className="iconBtn" onClick={() => window.location.reload()}><img className="icon" src={chefIcon} alt="Chef Icon" /></button>
      <h1 className="title">Chef Claude</h1>
    </section>
  );
}

