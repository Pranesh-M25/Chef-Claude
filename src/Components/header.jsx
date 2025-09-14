import chefIcon from "../assets/chef.png";
export function Header() {
  return (
    <section className="header">
      <img className="icon" src={chefIcon} alt="Chef Icon" />
      <h1 className="title">Chef Claude</h1>
    </section>
  );
}

