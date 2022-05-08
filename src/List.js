import Item from "./item";
import "./styles.css";
const List = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return <Item item={item} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;
