import { toast } from "react-toastify";
export function copyText(text) {
  //   // select the text field
  //   text.select();
  //   text.setSelectionRange(0, 99999); /*For mobile devices*/

  //   //copy the text inside text field
  //   document.execCommand("copy");

  //   //Alert the copied text
  console.log(text);
  if (text) {
    //on http where navigator.clipboard ain't allowed
    typeof (navigator.clipboard === "undefined")
      ? noNavigatorCopy(text)
      : navigatorCopy(text);
  } else toast.error("C'mon 😠 , nothing to copy");

  function noNavigatorCopy(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful
        ? "hey! Link copied! 🙂 Go and head and paste it in your whatsapp message now (" +
          text +
          ") "
        : "Something went wrong";
      toast.success(msg);
    } catch (err) {
      toast.error(
        "That went wrong 😧 but don't fret, give it another shot 👍 "
      );
    }

    document.body.removeChild(textArea);
    return;
  }

  function navigatorCopy(text) {
    navigator.clipboard.writeText(text);
    toast.success(
      "hey! Link copied! 🙂 Go and head and paste it in your whatsapp message now (" +
        text +
        ") "
    );
    return;
  }
}
