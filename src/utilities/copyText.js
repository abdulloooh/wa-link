import toastr from "toastr";
export function copyText(text) {
  //   // select the text field
  //   text.select();
  //   text.setSelectionRange(0, 99999); /*For mobile devices*/

  //   //copy the text inside text field
  //   document.execCommand("copy");

  //   //Alert the copied text

  if (text) {
    if (typeof navigator.clipboard == "undefined") {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; //avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful
          ? '"hey! Link copied! 🙂 Go and head and paste it in your whatsapp message now"'
          : "Something went wrong";
        toastr.info(msg);
      } catch (err) {
        toastr.warning("Was not possible to copy the text: ", err);
      }

      document.body.removeChild(textArea);
      return;
    }
    navigator.clipboard.writeText(text);
    alert(
      "hey! Link copied! 🙂 Go and head and paste it in your whatsapp message now"
    );
  } else alert("C'mon 😥, nothing to copy");
}
