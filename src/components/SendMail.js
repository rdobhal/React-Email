import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const SendMail = (props) => {
  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    setFormData(data)
  }
  useEffect(() => {
    localStorage.setItem('list',JSON.stringify(formData))
  }, [formData])
  

  return ( props.trigger ?
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>new message</h3>
        <CloseIcon className="sendMail__close" onClick={()=>{props.setTrigger(false)}}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail_error" style={{color: "red"}}>To is required</p>}

        <input
          placeholder="CC"
          type="text"
          {...register("cc", { required: true })}
        />
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        <input
          placeholder="message"
          type="text"
          {...register("body", { required: true })}
        />

        <div className="sendMail__options">
        <Button className="sendmail__send" onClick={handleSubmit(onSubmit)}>Send</Button>
        </div>
      </form>
    </div>: ""
  );
};

export default SendMail;
