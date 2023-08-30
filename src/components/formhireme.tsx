import { useState, useEffect } from "react";

export default function formhireme() {
  const [nama, setNama] = useState("");
  const [description, setDescription] = useState("");

  // useEffect(()=>{
  //     console.log(nama)
  //     console.log(description)
  // },[nama, description])

  return (
    <section
      id="form"
      className="mx-auto max-w-4xl rounded-md px-6 py-2 shadow-md"
    >
      <form method="get" action={`https://api.whatsapp.com/send`}>
        {/* https://api.whatsapp.com/send/?phone=6289529456271&text=Halo, saya nursyah\ningin minta tolong dibuatin persiapan&type=phone_number&app_absent=0 */}
        <div className="mt-2">
          <label className="label" form="username">
            Nama
          </label>
          <input
            id="nama"
            value={nama}
            onChange={e => setNama(e.currentTarget.value)}
            placeholder="tolong isikan nama anda"
            type="text"
            className="input"
            required
          />
        </div>
        {/* <div className="mt-2">
    <label className="label" for="password">Nomor WA(+62)</label>
    <input id="nowa" placeholder="089529456280" type="text" className="input">
    </div> */}
        <div className="mt-2">
          <label className="label" form="password">
            Permintaan
          </label>
          <textarea
            value={description}
            onChange={e => setDescription(e.currentTarget.value)}
            id="deskripsi"
            placeholder="tolong isikan permintaan anda"
            className="textarea"
            required
          ></textarea>
        </div>

        <input type="hidden" name="phone" defaultValue={"6289529456271"} />
        {/* @ts-ignore */}
        <input
          type="hidden"
          name="text"
          defaultValue={`${nama}\n${description}`}
        />
        <input type="hidden" name="type" defaultValue={"phone_number"} />
        {/* &type=phone_number&app_absent=0 */}
        {/* <div className="mt-2">
    <label className="label" for="passwordConfirmation">Budget</label>
    <input id="budget" placeholder="1,5jt" type="text" className="input">
    </div> */}

        <div className="my-6 flex justify-end">
          <button type="submit" className="btnsubmit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
