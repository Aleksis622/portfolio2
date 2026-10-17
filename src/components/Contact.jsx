import { useState } from "react";
import Icon from "./Icon";
import { GrowthArt } from "./Illustrations";
import { EMAIL } from "../data/site";
import { useLang } from "../i18n/context";

/* No backend here: the form opens the visitor's email app with the message filled in. */
export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [titleStart, titleAccent] = t("contactTitle");

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = t("mailSubject", { name: form.name });
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="contact">
      <div className="contact-left">
        <h2 className="section-title">
          {titleStart} <span className="accent">{titleAccent}</span>
        </h2>
        <p className="contact-text">
          {t("contactText")} <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <GrowthArt />
      </div>

      <form className="contact-form" onSubmit={submit}>
        <div className="form-row">
          <label>
            {t("yourName")}
            <input name="name" placeholder={t("phName")} value={form.name} onChange={update} required />
          </label>
          <label>
            {t("yourEmail")}
            <input name="email" type="email" placeholder={t("phEmail")} value={form.email} onChange={update} required />
          </label>
        </div>
        <label>
          {t("yourMessage")}
          <textarea name="message" placeholder={t("phMessage")} rows="6" value={form.message} onChange={update} required />
        </label>
        <button type="submit" className="btn btn-primary">
          {t("send")} <Icon name="send" size={15} />
        </button>
        <small className="form-note">{t("formNote")}</small>
      </form>
    </div>
  );
}
