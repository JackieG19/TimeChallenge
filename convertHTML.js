/*
Output 1:
convertHTML("Dolce & Gabbana")
should return Dolce &amp; Gabbana

Output 2:
convertHTML("Hamburgers < Pizza < Tacos")
should return Hamburgers &lt; Pizza &lt; Tacos

Output 3:
convertHTML("Sixty > twelve")
should return Sixty &gt; twelve

Output 4:
convertHTML('Stuff in "quotation marks"')
should return Stuff in &quot;quotation marks&quot;

Output 5:
convertHTML("Schindler's List")
should return Schindler&apos;s List

Output 6:
convertHTML("<>")
should return &lt;&gt;

Output 7:
convertHTML("abc")
should return abc
*/

/*Convert the characters &, <, >, " (double quote), and ' (apostrophe),
in a string to their corresponding HTML entities.*/

function convertHTML(str) {

  // var uri = str;
  // var en = encodeURI(uri);
  // console.log(en);
  
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/, '&apos;');

}
convertHTML("Schindler's List");
