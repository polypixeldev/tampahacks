document.getElementById("email-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  fetch(
    "https://services.leadconnectorhq.com/hooks/TFhJZDO3j6DhF9ljVKym/webhook-trigger/fbc82ba0-6909-46b1-8078-96306cb47bad",
    {
      method: "POST",
      body: JSON.stringify({
        email: new FormData(
          document.getElementById("email-form") as HTMLFormElement,
        ).get("email"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  (document.getElementById("email-input") as HTMLInputElement).value = "";
  document.getElementById("email-button")!.innerHTML = "signed up!";
});
