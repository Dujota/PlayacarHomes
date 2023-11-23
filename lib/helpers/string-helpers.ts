export function getCapitalizedText(text: string) {
  return text[0].toUpperCase() + text.substring(1);
}

export function formatAndCapitalize(text) {
  // Split the text by dashes
  let words = text.split('-');

  // Capitalize each word
  let capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  // Join the words with a space and return
  return capitalizedWords.join(' ');
}
