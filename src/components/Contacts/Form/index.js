import { useState, useEffect } from "react";
import Contacts from "..";
const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues); //form içi temizlendi
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); //form elementi kayıt yaptığında ynilenmesini durdurur.
    if (form.fullname === "" || form.phone_number === "") {
      //kontrol
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="fullname"
            placeholder="Fullname"
            value={form.fullname}
            onChange={onChangeInput}
          />
        </div>
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={onChangeInput}
          />
        </div>
        <div className="btn" >
          <button onClick={onSubmit}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
