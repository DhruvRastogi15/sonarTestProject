// Code with vulnerabilities and code smells
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  if (app) {
    // Code Smell 1: Large Block of Unorganized Code (long function)
    const userInput = '<script>alert("XSS Attack!")</script>'; // Malicious input (XSS)
    const heading = document.createElement("h1");
    heading.innerHTML = userInput; // Vulnerability: XSS - Unescaped user input

    const userMessage = "<img src='invalid_image.jpg' onerror='alert(\"XSS Triggered!\")' />"; // Another malicious input (XSS)
    const paragraph = document.createElement("p");
    paragraph.innerHTML = userMessage; // Vulnerability: XSS via image tag with onerror

    app.appendChild(heading);
    app.appendChild(paragraph);

    // Code Smell 2: Duplicate logic (repetitive code)
    const firstButton = document.createElement("button");
    firstButton.textContent = "Click me!";
    firstButton.setAttribute("onclick", "alert('Button clicked!');"); // Inline event handler (dangerous)
    app.appendChild(firstButton);

    const secondButton = document.createElement("button");
    secondButton.textContent = "Click me too!";
    secondButton.setAttribute("onclick", "alert('Button clicked!');"); // Duplicate inline event handler (same as above)
    app.appendChild(secondButton);

    // Code Smell 3: Unnecessary Global Variable Leak
    window.myGlobalVar = "This is a global variable!"; // Global state exposed, not encapsulated

    // Code Smell 4: Poor Variable Naming
    let msg = "Hello, world!"; // Poor variable name: 'msg' doesn't describe its purpose clearly
    let inp = "<script>alert('Unsafe input!')</script>"; // Poor variable name: 'inp' is too vague

    // Code Smell 5: Long, complex conditionals
    if (userInput === "<script>alert('XSS')</script>" || userMessage === "<img src='invalid_image.jpg' onerror='alert(\"XSS\")' />") {
      console.log("Potential XSS detected!"); // Bad condition that is hard to extend or read
    }

    // Code Smell 6: Inline Event Handlers (security risk and poor maintainability)
    const unsafeButton = document.createElement("button");
    unsafeButton.textContent = "Do something unsafe!";
    unsafeButton.setAttribute("onclick", "console.log('Unsafe behavior executed');"); // Inline handler
    app.appendChild(unsafeButton);

    // Vulnerability 2: Using eval (dangerous!)
    const unsafeCode = "alert('This is unsafe code!')";
    eval(unsafeCode); // Dangerous, opens door to arbitrary code execution

  }
});
