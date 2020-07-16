export function getCookie(cname: string): string {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function setCookie(cname: string, cvalue: string, days = 0): void {
  const expiredDate = new Date();
  expiredDate.setDate(expiredDate.getDate() + days);

  const cookie_value = escape(cvalue) + (days == null ? '' : ';    expires=' + expiredDate.toUTCString());
  document.cookie = cname + '=' + cookie_value;
}
