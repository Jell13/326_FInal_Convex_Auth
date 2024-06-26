"use client"

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {

  const store = useMutation(api.users.storeUser)

  useEffect(() => {
    store({})
  },[])
  return (
    <div className="h-screen w-screen">
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="text-6xl font-bold">
          <span className="text-green-600">Auth</span> Testing
        </h1>
      </div>
    </div>
  );
}
