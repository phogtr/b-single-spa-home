import { Chart } from "./components/Chart";

export default function Root() {
  const data = {
    labels: ["Red", "Green", "Orange"],
    datasets: [
      {
        label: "# of something",
        data: [300, 50, 100],
        backgroundColor: ["Red", "Green", "Orange"],
      },
    ],
  };

  return (
    <section>
      <h1>Home</h1>
      <ul>
        <li>Root</li>
        <li>Navbar</li>
        <li>Home</li>
        <li>Users</li>
        <li>Posts</li>
        <hr />
        <li>create-single-spa --moduleType root-config</li>
        <li>
          create-single-spa <i>name-of-the-app</i> --framework react
        </li>
      </ul>
      <Chart data={data} />
    </section>
  );
}
