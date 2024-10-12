export function adminEmailTemplate({ phoneNumber, email, message }) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Playacar Homes</title>
    <meta name="description" content="Playacar Homes Realty">
    <meta name="author" content="PlayacarHomes">
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  </head>

  <body>
    <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
          </div>
          <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new mail from ✉️${email} </h3>
          <h4>Contact Number: ${phoneNumber ?? 'not provided'}</h4>
          <div style="font-size: 16px;">
          <p>Message:</p>
          <p>${message ?? 'no message provided'}</p>
          <br>
          </div>
          </div>
  </body>
  </html>`;
}
