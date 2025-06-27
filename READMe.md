Reflection Questions  

1. How did event.preventDefault() help?
It stopped the form from auto-submitting and reloading the page, which allowed me to validate the inputs first and display errors without clearing the user’s data.

2. Difference between HTML5 validation and JavaScript validation? Why use both?
HTML5 validation is fast and built-in but limited. JavaScript gives more control, lets me create custom checks, and show clearer error messages. Using both makes validation more complete and user-friendly.

3. How did you use localStorage for username? Any limits?
I stored the username with localStorage.setItem and brought it back on page load to auto-fill the field. However, it’s not secure for private data since it’s unencrypted and can be accessed by harmful scripts.

4. Challenge with real-time validation and solution?
At first, I struggled with selecting the input fields properly, but grouping them in an array helped. Also, it was tricky to avoid showing errors too early. I fixed it by checking inputs as the user typed, but only showing messages when needed.

5. How did you make error messages user-friendly and show at the right time?
I used both HTML and JavaScript validation. I wrote clear, helpful error messages near each field and only showed them when the input was invalid, updating them in real time and after submission.


References:  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation 
