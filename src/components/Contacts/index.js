import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "sinan",
      phone_number: "12332",
    },
    {
      fullname: "tuba",
      phone_number: "12544332",
    },
    {
      fullname: "sakine",
      phone_number: "1234432",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
