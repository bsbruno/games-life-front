export const CreditCardRegex = {
  card: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
};
export function cardReplace(numberCard: string) {
  numberCard = numberCard.replace(/\D/g, ""); // Permite apenas dígitos
  numberCard = numberCard.replace(/(\d{4})/g, "$1."); // Coloca um ponto a cada 4 caracteres
  numberCard = numberCard.replace(/\.$/, ""); // RemonumberCarde o ponto se estinumberCarder sobrando
  numberCard = numberCard.substring(0, 19); // Limita o tamanho

  return numberCard;
}

export function cvcReplace(cvc: string) {
  cvc = cvc.replace(/\D/g, "");
  cvc = cvc.substring(0, 4);
  return cvc;
}

/*
(0[1-9]|10|11|12)/20[0-9]{2}$
regex para validar datas validas
*/
function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}
export function dateCard(date: string) {
  const clearDate = clearNumber(date);
  if (clearDate.length >= 3) {
    return `${clearDate.slice(0, 2)}/${clearDate.slice(2, 4)}`;
  }

  return date;
}
