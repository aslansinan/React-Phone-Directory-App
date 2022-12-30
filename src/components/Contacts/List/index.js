import { useState } from "react";
import styles from "./styles.module.css"
function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some(
      (key) =>
        item[key].toString().toLowerCase().includes(filterText.toLowerCase()) // filtreleme işlemi
    );
  });

  console.log("filtered", filtered);
  return (
    <div>
      <input
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p style={{ color: "red", backgroundColor: "white", paddingTop: 5 }}>
        Total Contacts:{filtered.length}
      </p>
      {/* implement bootsrap */}
      <div class="alert alert-light" role="alert"> 
        A simple light alert—check it out!
      </div>
      <div className={styles.title}>B</div>
    </div>
  );
}

export default List;
