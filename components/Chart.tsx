import { ResponsiveBar } from "@nivo/bar";

const data = [
  { country: "USA", sales: 100 },
  { country: "UK", sales: 200 },
  { country: "Canada", sales: 300 },
];

export const MyBarChart = () => {
  return (
    <div style={{ height: "400px" }}>
      {" "}
      {/* コンテナに高さを指定 */}
      <ResponsiveBar
        data={data}
        keys={["sales"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Sales",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
    </div>
  );
};
