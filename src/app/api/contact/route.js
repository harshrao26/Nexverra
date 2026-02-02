import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7TOjr29lIUDdKu7Uut-zrzNvAb5cOmStOxGPUG7IwQDyGi09HIoeihNEkJEX2oyjw/exec";

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SHEETS_WEBAPP_URL is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    // Forward to Google Apps Script
    // We strictly assume body is JSON
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error("Google Script returned " + response.status);
    }

    const data = await response.json();

    if (data.status === "success") {
      return NextResponse.json({ success: true, message: "Inquiry submitted" });
    } else {
      throw new Error(data.message || "Submission failed");
    }
  } catch (error) {
    console.error("Contact submitting error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
