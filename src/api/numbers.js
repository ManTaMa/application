const toPersian = value => {
  const charCodeZero = "۰".charCodeAt(0);
  return String(value).replace(/[0-9]/g, w =>
    String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
  );
};
export default {
  putCommas(number) {
    if (typeof number === "undefined") return number;
    if (typeof number === "number") number = number.toString();
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
  toEnglishDigits(value) {
    const charCodeZero = "۰".charCodeAt(0);
    return value.replace(/[۰-۹]/g, w => w.charCodeAt(0) - charCodeZero);
  },
  toPersianDigits(value) {
    return toPersian(value);
  },
  toTime(seconds) {
    let temp = seconds;
    let string = "";
    let c;
    while (temp) {
      c = ("0" + temp % 60).slice(-2);
      temp = Math.floor(temp / 60);
      string = `${c}:${string}`;
    }
    if (string) return toPersian(string.slice(0, -1));
    return 0;
  }
};
