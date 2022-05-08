import "./styles.css";

const Item = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item.first_name}</td>
        <td>{item.last_name}</td>
        <td>{item.age}</td>
        <td>{item.email}</td>
        <td>
          <a href={item.web}>{item.web}</a>
        </td>
      </tr>
    </>
  );
};
export default Item;
