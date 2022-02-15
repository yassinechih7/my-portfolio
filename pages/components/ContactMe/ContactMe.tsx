import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactMe.module.css";
import Button from "../Button/Button";

function ContactMe() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.ContactMe}>
      <div className={styles.contactMeWrapper}>
        <div className={styles.contactMeTitle}>
          <h2>Contact Me</h2>
        </div>
        <form
          action=""
          className={styles.ContactMeForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.firstName}>
            <label htmlFor="firstName">Your name</label>
            <input
              {...register("firstName")}
              placeholder="John Doe"
              id="firstName"
            />
          </div>

          <div className={styles.emailaddr}>
            <label htmlFor="emailaddr">Email address</label>
            <input
              {...register("emailaddr")}
              placeholder="john@gmail.com"
              id="emailaddr"
              type="email"
            />
          </div>

          <div className={styles.phonenumber}>
            <label htmlFor="phonenumber">Phone number</label>
            <input
              {...register("phonenumber")}
              placeholder="212 000 000 000"
              id="phonenumber"
            />
          </div>

          <div className={styles.subject}>
            <label htmlFor="subject">Subject</label>
            <input
              {...register("subject")}
              placeholder="Type here"
              id="subject"
            />
          </div>

          <div className={styles.message}>
            <label htmlFor="message">Message</label>
            <textarea
              {...register("lastName")}
              placeholder="Type here"
              cols={30}
              rows={10}
              id="message"
            ></textarea>
          </div>
          <div className="contactMeSubmitButton">
            <Button type="submit" text="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactMe;
