const form = document.querySelector("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const identifier = document.querySelector("#username-email").value
    const password = document.querySelector("#password").value

    const response = await fetch("https://miniature-train-j49jqj6x5x7hqgqj-5253.app.github.dev/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier,
            password
        })
    })

    if (!response.ok) {
        console.log("Login ou senha inválido.")

        return
    }

    const data = await response.json()

    console.log(data)
})
