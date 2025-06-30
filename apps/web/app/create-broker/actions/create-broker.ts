"use server";

import { revalidatePath } from "next/cache";

export default async function CreateBroker(formData: FormData) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brokers`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    revalidatePath("brokers");
}
    