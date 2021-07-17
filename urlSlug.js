function urlSlug(string) {
 return string
  .toLowerCase()
  .trim()
  .split(/\s+/)
  .join("-");
}

console.log(urlSlug("    SAAD AZGHOUR SAAD "));
