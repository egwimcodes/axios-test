"use client"
import { Register } from "@/componenets/utils/requests";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Register({
      "first_name": "Wisdom",
      "is_premium_user": false,
      "password": "1113269206",
      "referral_code": "",
      "username": "Snowwisdom"
    }).then((response) => {
      alert(JSON.stringify(response))
    })


  }, [])
  return (
    <>
      
      <h1>Hello Word</h1>
    </>
  );
}
