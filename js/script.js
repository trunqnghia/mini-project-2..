function analyzeURL() {

    const urlText =
        document.getElementById("urlInput").value;

    const result =
        document.getElementById("result");

    try {

        const url = new URL(urlText);

        result.innerHTML = `
            <p>Protocol: ${url.protocol}</p>
            <p>Domain: ${url.hostname}</p>
            <p>Path: ${url.pathname}</p>
        `;

    } catch {

        result.innerHTML =
            "<span style='color:red'>URL không hợp lệ!</span>";
    }
}
